// Web5Context.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api";
import axios from "axios";

const Web5Context = createContext();

export const useWeb5 = () => {
  return useContext(Web5Context);
};

export const Web5Provider = ({ children }) => {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);
  const [recording, setRecording] = useState();
  const [info, setInfo] = useState();
  const [noteValue, setNoteValue] = useState("");
  const [journal, setJournal] = useState([]);
  const [category, setCategory] = useState([]);

  //Goal
  const [goaltodo, setGoaltodo] = useState([
    {
      id: 11,
      description: "New Task 1",
      completed: false,
    },
    {
      id: 12,
      description: "New Task 2",
      completed: false,
    },
  ]);
  const [goalstruct, setGoalstruct] = useState({
    title: "",
    content: "",
    status: true,
    task: {
      total: 2,
      completed: 0
    }

  })

  const createProtocolDefinition = () => {
    const thrivemindProtocolDefinition = {
      protocol: "https://thrivemind.dev/thrivemind-chat-protocol",
      published: true,
      types: {
        message: {
          schema: "https://thrivemind.dev/profile",
          dataFormat: ["application/json"],
        },
      },
      structure: {
        message: {
          $actions: [
            { who: "anyone", can: "write" },
            { who: "author", of: "message", can: "read" },
            { who: "recipient", of: "message", can: "read" },
          ],
        },
      },
    };
    return thrivemindProtocolDefinition;
  };

  console.log(journal);

  const queryForProtocol = async () => {
    const { web5 } = await Web5.connect();

    //Query records with plain text data format
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          schema: "https://thrivemind.dev/profile",
          dataFormat: "application/json",
        },
      },
    });

    return response;
  };

  const queryForJournal = async () => {
    try {
      const { web5 } = await Web5.connect();

      const response = await web5.dwn.records.query({
        message: {
          filter: {
            schema: "https://thrivemind.dev/journal",
            dataFormat: "application/json",
          },
        },
      });

      const newData = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          console.log(data, "make duo");
          return data;
        })
      );

      setJournal(newData);
    } catch (error) {
      console.error("Error fetching and setting journal data:", error);
    }
  };

  const installProtocolLocally = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const configureProtocol = async (web5, did) => {
    const protocolDefinition = await createProtocolDefinition();

    const { records: localProtocol, status: localProtocolStatus } =
      await queryForProtocol(web5);
    console.log({ localProtocol, localProtocolStatus });
    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
      const { protocol, status } = await installProtocolLocally(
        web5,
        protocolDefinition
      );
      console.log("Protocol installed locally", protocol, status);

      const { status: configureRemoteStatus } = await protocol.send(did);
      console.log(
        "Did the protocol install on the remote DWN?",
        configureRemoteStatus
      );
    } else {
      console.log("Protocol already installed");
    }
  };

  const createAcc = () => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      console.log(web5);

      setWeb5(web5);
      localStorage.setItem("myDid", JSON.stringify(did));

      // console.log(JSON.stringify(did));
      setMyDid(shortenToSixLetters(did));

      if (web5 && did) {
        await configureProtocol(web5, did);
      }
    };
    initWeb5();
  };

  const constructMessage = (e) => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const ding = {
      note: noteValue,
      timestampWritten: `${currentDate} ${currentTime}`,
    };
    return ding;
  };

  const writeToDwn = async (ding) => {
    const { web5 } = await Web5.connect();
    const { record } = await web5.dwn.records.create({
      data: ding,
      message: {
        schema: "https://thrivemind.dev/journal",
        dataFormat: "application/json",
      },
    });
    return record;
  };

  // write to journal
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ding = constructMessage(e);
    const record = await writeToDwn(ding);
    //   const { status } = await sendRecord(record);

    console.log(" record status", record);
    await queryForJournal();
  };

  // Here we handle the Goal section
  const constructGoalsData = () => {
    const currentDate = new Date().toLocaleDateString();

    const goalData = {
      title: "New Goal 1",
      status: "Active",
      openedDate: currentDate,
      content: "Description for the new goal 1...",
      tasks: {
        total: 3,
        completed: 0,
      },
      todos: goaltodo,
    };

    return goalData;
  };

  // Create a Profile record
  async function createProfile(username, imageFile) {
    const { web5 } = await Web5.connect();

    let base64Image = null;

    if (imageFile) {
      const binaryImage = await imageFile.arrayBuffer();
      base64Image = btoa(
        new Uint8Array(binaryImage).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
    }

    const messageData = {
      username,
      image: base64Image,
    };

    const { record } = await web5.dwn.records.create({
      data: messageData,
      message: {
        schema: "https://thrivemind.dev/profile",
        dataFormat: "application/json",
      },
    });
    console.log(record);
    setRecording(record);
    return record;
  }

  useEffect(() => {
    const fetchData = async () => {
      const called = await queryForProtocol();
      console.log({ called });

      const profileInfo = await Promise.all(
        called.records.map(async (record) => {
          const data = await record.data.json();
          console.log(data);
          return data;
        })
      );

      await queryForJournal();

      // Filter out the first two elements
      const filteredprofileInfo = profileInfo;
      const infoObject =
        filteredprofileInfo.length === 1 ? filteredprofileInfo[0] : null;
      setInfo(infoObject);
      // return sentDings;

      const storedMyDid = localStorage.getItem("myDid");
      if (storedMyDid) {
        console.log({ storedMyDid });
        setMyDid(shortenToSixLetters(storedMyDid));
      }
    };

    fetchData(); // Call the asynchronous function immediately

    // Additional cleanup logic or dependencies can be added here
  }, [web5, recording]);

  function shortenToSixLetters(inputString) {
    if (typeof inputString !== "string") {
      throw new Error("Input must be a string");
    }
    return inputString.slice(0, 14) + "...";
  }

  // this where the AI function is written

  async function AI(userInputs, category) {
    const apiKey = "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";
    if (!apiKey) {
      throw new Error("API key not found in environment variables.");
    }

    const endpoint = "https://api.openai.com/v1/chat/completions";

    // Prepare the request payload
    const payload = {
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are a ${category} counselor assistant, you offer advices to people on ${category}, designed to output JSON.`,
        },
        { role: "user", content: "Hello my name is patient" },
        {
          role: "assistant",
          content: "Okay Welcome patient, what's your question?",
        },
        {
          role: "user",
          content: `mood: ${userInputs[0].user} and my question: ${userInputs[1].user} and lastly: ${userInputs[2].user} ?`,
        },
      ],
      max_tokens: 200,
      temperature: 0.7,
      n: 1,
    };

    // Make the API request to ChatGPT API
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      // Parse the response
      const data = await response.json();
      console.log(data);
      const generatedSentence = data.choices[0].message.content;
      return generatedSentence;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  const contextValue = {
    web5,
    myDid,
    setNoteValue,
    handleSubmit,
    createProtocolDefinition,
    queryForProtocol,
    installProtocolLocally,
    configureProtocol,
    createAcc,
    createProfile,
    info,
    journal,
    AI,
    setCategory,
    category,
  };

  return (
    <Web5Context.Provider value={contextValue}>{children}</Web5Context.Provider>
  );
};
