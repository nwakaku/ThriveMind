// Web5Context.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
// import { Web5 } from "@web5/api/browser";
// import axios from "axios";

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
  const [goalsData, setGoalsData] = useState([]);
  const [category, setCategory] = useState({
    description: "",
    imageUrl: "",
    category: "",
  });

  const openAIKey = process.env.NEXT_PUBLIC_OPENAI_KEY;

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

  // console.log(journal);

  const queryForProtocol = async () => {
    const { Web5 } = await import("@web5/api/browser");

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
    const { Web5 } = await import("@web5/api/browser");

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

  //query for goals
  const queryForGoal = async () => {
    const { Web5 } = await import("@web5/api/browser");

    try {
      const { web5 } = await Web5.connect();

      const response = await web5.dwn.records.query({
        message: {
          filter: {
            schema: "https://thrivemind.dev/createGoal",
            dataFormat: "application/json",
          },
        },
      });

      const newData = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          // console.log(data, "goals set");
          return data;
        })
      );

      setGoalsData(newData);
    } catch (error) {
      console.error("Error fetching and setting journal data:", error);
    }
  };

  // Update Goals
  const updateGoals = async (dataFile) => {
    const { Web5 } = await import("@web5/api/browser");

    try {
      const { web5 } = await Web5.connect();

      const { record } = await web5.dwn.records.read({
        message: {
          filter: {
            schema: "https://thrivemind.dev/createGoal",
          },
        },
      });

      const { status } = await record.update({ data: dataFile });
      console.log(record);

      setGoalsData(status);
    } catch (error) {
      console.error("Error fetching and setting journal data:", error);
    }
  };

  //

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
      const { Web5 } = await import("@web5/api/browser");

      const { web5, did } = await Web5.connect();
      // console.log(web5);

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
    const { Web5 } = await import("@web5/api/browser");

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

  // Create a Profile record
  async function createProfile(username, imageFile) {
    const { Web5 } = await import("@web5/api/browser");

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

  async function createGoal(goals) {
    const { Web5 } = await import("@web5/api/browser");

    const { web5 } = await Web5.connect();

    const messageData = goals;

    const { record } = await web5.dwn.records.create({
      data: messageData,
      message: {
        schema: "https://thrivemind.dev/createGoal",
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

      const profileInfo = await Promise.all(
        called.records.map(async (record) => {
          const data = await record.data.json();
          console.log(data);
          return data;
        })
      );

      await queryForJournal();

      // query for goals
      await queryForGoal();

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
    console.log(category);
    if (!process.env.NEXT_PUBLIC_OPENAI_KEY) {
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
          content: `mood: ${userInputs[0].user} and my question: ${userInputs[1].user} , and also ${userInputs[2].user}?`,
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
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
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

  // this where the AI function is written

  async function AIHealth(userInputs) {
    // const apiKey = openAIKey;
    if (!process.env.NEXT_PUBLIC_OPENAI_KEY) {
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
          content: `You are a medical counselor assistant, designed to output JSON.`,
        },
        { role: "user", content: "Hello my name is patient" },
        {
          role: "assistant",
          content: "Okay Welcome patient, what's your question?",
        },
        {
          role: "user",
          content: ` my question: ${userInputs} ?`,
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
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
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
    AIHealth,
    createGoal,
    goalsData,
    updateGoals,
    category,
    setCategory,
  };

  return (
    <Web5Context.Provider value={contextValue}>{children}</Web5Context.Provider>
  );
};
