// Web5Context.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api";

const Web5Context = createContext();

export const useWeb5 = () => {
  return useContext(Web5Context);
};

export const Web5Provider = ({ children }) => {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);
  const [recording, setRecording] = useState();
  const [info, setInfo] = useState();

  const createProtocolDefinition = () => {
    const dingerProtocolDefinition = {
      protocol: "https://blackgirlbytes.dev/dinger-chat-protocol",
      published: true,
      types: {
        ding: {
          schema: "https://blackgirlbytes.dev/ding",
          dataFormats: ["application/json"],
        },
      },
      structure: {
        ding: {
          $actions: [
            { who: "anyone", can: "write" },
            { who: "author", of: "ding", can: "read" },
            { who: "recipient", of: "ding", can: "read" },
          ],
        },
      },
    };
    return dingerProtocolDefinition;
  };

  const queryForProtocol = async () => {
    const { web5 } = await Web5.connect();

    //Query records with plain text data format
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          dataFormat: "application/json",
        },
      },
    });

    return response;
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

  // Create a mixed record
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
        schema: "https://blackgirlbytes.dev/ding",
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
          return data;
        })
      );

      // Filter out the first two elements
      const filteredprofileInfo = profileInfo.slice(2);
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

  const contextValue = {
    web5,
    myDid,
    createProtocolDefinition,
    queryForProtocol,
    installProtocolLocally,
    configureProtocol,
    createAcc,
    createProfile,
    info,
  };

  return (
    <Web5Context.Provider value={contextValue}>{children}</Web5Context.Provider>
  );
};
