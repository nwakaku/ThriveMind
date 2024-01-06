import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Records } from "./Records";
import { FindDoctors } from "./FindDoctors";
import { AIAnalyser } from "./AIAnalyser";
import { PostVisit } from "./PostVisit";
import record from "/public/assets/Records.png";
import search from "/public/assets/Search2.png";
import Ai from '/public/assets/AIAnalyser.png';
import visit from '/public/assets/visit.png'
import { Input } from "./ui/input";
import { useWeb5 } from "@/app/web5Context";



export const Health = () => {
  const [activeComponent, setActiveComponent] = useState("records");
  const [file, setFile] = useState();
  const [fileStructure, setFileStructure] = useState();

    const { AIHealth } = useWeb5();



  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Selected file:", file); // Log the selected file

    AIHealth(file);
  }

  console.log(fileStructure);


  // Define header information for each component
  const componentHeaderInfo = {
    records: {
      title: "Medical Records",
      image: record,
      buttonText: "Import Your Records",
    },
    postVisit: {
      title: "Post Visits",
      image: visit, // Replace with the correct image for post visits
      buttonText: "Schedule appointment",
    },
    aiAnalyser: {
      title: "AI Report Analyser.",
      image: Ai, // Replace with the correct image for AI Analyser
      buttonText: "Upload Report",
    },
    findDoctors: {
      title: "Find Doctors and Centres",
      image: search, // Replace with the correct image for Find Doctors
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

  const { title, image, buttonText } = componentHeaderInfo[activeComponent];

  return (
    <div class="h-screen pb-16 antialiased text-gray-800">
      {/* Top header */}
      <div className="flex justify-between items-center mr-7 my-3">
        <div className="flex space-x-2 items-center">
          <Image src={image} className="w-8 h-8" />
          <p className="text-2xl font-bold ml-3 text-gray-200">{title}</p>
        </div>
        <div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="file" placeholder="file" onChange={handleChange} />
            <Button
              className=" bg-indigo-600 hover:bg-indigo-700 px-4"
              onClick={(e) => 
                handleSubmit(e)
              }>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      <div class="flex flex-row h-[90%] w-full overflow-x-hidden">
        {/* side bar */}
        <div class="flex flex-col py-4 px-3 w-36 justify-around bg-white flex-shrink-0 my-6 rounded-xl">
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("records")}>
            <Image src={record} className="w-16 h-16 mx-auto" />
            <p className="text-lg text-gray-900 font-bold mt-1">Records</p>
          </button>
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("postVisit")}>
            <Image src={visit} className="w-16 h-16 mx-auto" />
            <p className="text-lg  text-gray-900 font-bold mt-1">Checkups</p>
          </button>
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("aiAnalyser")}>
            <Image src={Ai} className="w-16 h-16 mx-auto" />
            <p className="text-lg  text-gray-900 font-bold mt-1">AI Doc.</p>
          </button>
          <button
            className="mx-auto hover:bg-gray-100 p-3 rounded-xl"
            onClick={() => setActiveComponent("findDoctors")}>
            <Image src={search} className="w-16 h-16 mx-auto" />
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
