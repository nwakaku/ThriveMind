import React from "react";
import {
  FaArrowUp,
  FaGreaterThan,
  FaSort,
  FaStoreAltSlash,
} from "react-icons/fa";
import badge2 from "/public/assets/badge2.png";
import badge4 from "/public/assets/badge4.png";
import Image from "next/image";
import { SummaryCard } from "./SummaryCard";
import { ResourceCard } from "./ResourceCard";

export const AIAnalyser = () => {
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Main body */}
      <div className="flex justify-center items-center mx-64 text-gray-900">
       <button className="hover:bg-blue-300 bg-white shadow-md font-semibold  focus:bg-blue-300 h-full w-full px-3 py-3 rounded-tl-lg rounded-bl-lg">
        Summary
       </button>
       <button className="hover:bg-blue-300 bg-white shadow-md font-semibold mx-0.5 focus:bg-blue-300 h-full w-full px-3 py-3">
        Chat
       </button>
       <button className="hover:bg-blue-300 bg-white shadow-md font-semibold  focus:bg-blue-300 h-full w-full px-3 py-3 rounded-tr-lg rounded-br-lg">
        Resources and Tips
       </button>
      </div>
      <div className="mx-auto mt-8">
      {/* <SummaryCard/> */}
      <ResourceCard/>
      </div>
    </div>
  );
};
