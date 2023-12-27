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
      const [activeRecipient, setActiveRecipient] = useState(null);


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

  const queryForProtocol = async (web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://blackgirlbytes.dev/dinger-chat-protocol",
        },
      },
    });
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

    const { protocols: localProtocol, status: localProtocolStatus } =
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
      console.log(web5, did);

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

  useEffect(() => {
      // You can add any cleanup or side effects here if needed

      const storedMyDid = localStorage.getItem("myDid");
      console.log({storedMyDid});
      setMyDid(shortenToSixLetters(storedMyDid));
  }, [web5]);
    
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
  };

  return (
    <Web5Context.Provider value={contextValue}>{children}</Web5Context.Provider>
  );
};
