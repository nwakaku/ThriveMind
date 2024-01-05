import React, { useState } from "react";
import { Button } from "./ui/button";
import { Records } from "./Records";
import { FindDoctors } from "./FindDoctors";
import { AIAnalyser } from "./AIAnalyser";
import { PostVisit } from "./PostVisit";


export const Health = () => {
  const [activeComponent, setActiveComponent] = useState("records");

  // Define header information for each component
  const componentHeaderInfo = {
    records: {
      title: "Medical Records",
      img: 'https://i.ibb.co/rdLTq82/Records.png',
      buttonText: "Import Your Records",
    },
    postVisit: {
      title: "Post Visits",
      img: 'https://i.ibb.co/m5tLrgj/visit.png', // Replace with the correct img for post visits
      buttonText: "Schedule appointment",
    },
    aiAnalyser: {
      title: "AI Report Analyser.",
      img: 'https://i.ibb.co/BKMb9Ym/AIAnalyser.png', // Replace with the correct img for AI Analyser
      buttonText: "Upload Report",
    },
    findDoctors: {
      title: "Find Doctors and Centres",
      img: 'https://i.ibb.co/ZcSPJvS/Search2.png', // Replace with the correct img for Find Doctors
      buttonText: "Search",
    },
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "records":
        return <Records />;
      case "postVisit":
        return <PostVisit />;
      case "aiAnalyser":
        return <AIAnalyser />;
      case "findDoctors":
        return <FindDoctors />;
      default:
        return null;
    }
  };

  const { title, img, buttonText } = componentHeaderInfo[activeComponent];

  return (
    <div class="h-screen pb-16 antialiased text-gray-800">
      {/* Top header */}
      <div className="flex justify-between items-center mr-7 my-3">
        <div className="flex space-x-2 items-center">
          <img src={img} className="w-8 h-8" />
          <p className="text-2xl font-bold ml-3 text-gray-200">{title}</p>
        </div>
        <Button
          className=" bg-indigo-600 hover:bg-indigo-700 px-4"
          onClick={() => {
            // Add the logic for the create button click here
          }}
        >
          {buttonText}
        </Button>
      </div>
      <div class="flex flex-row h-[90%] w-full overflow-x-hidden">
        {/* side bar */}
        <div class="flex flex-col py-4 px-3 w-36 justify-around bg-white flex-shrink-0 my-6 rounded-xl">
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("records")}
          >
            <img src={componentHeaderInfo.records.img} className="w-16 h-16 mx-auto" />
            <p className="text-lg text-gray-900 font-bold mt-1">Records</p>
          </button>
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("postVisit")}
          >
            <img src={componentHeaderInfo.postVisit.img} className="w-16 h-16 mx-auto" />
            <p className="text-lg  text-gray-900 font-bold mt-1">Checkups</p>
          </button>
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("aiAnalyser")}
          >
            <img src={componentHeaderInfo.aiAnalyser.img} className="w-16 h-16 mx-auto" />
            <p className="text-lg  text-gray-900 font-bold mt-1">AI Doc.</p>
          </button>
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("findDoctors")}
          >
            <img src={componentHeaderInfo.findDoctors.img} className="w-16 h-16 mx-auto" />
            <p className="text-lg text-gray-900 font-bold mt-1">Search</p>
          </button>
        </div>

        {/* Main chat  */}
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="relative flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};
