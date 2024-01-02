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

export const PostVisit = () => {
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Header top */}
      <div className="flex justify-between space-x-4">
        <p className="font-semibold text-xl">Doctor Visits</p>
        <div className="flex ">
          {/* <button className="text-indigo-500 flex items-center space-x-2 mr-6 ">
            <FaArrowUp />
            <p className=" text-sm ">Export Medical Records</p>
          </button> */}

          <button className="text-indigo-500 flex items-center space-x-2">
            <FaStoreAltSlash />
            <p className=" ">Sort</p>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="flex flex-col  mt-6">
        {/* Options available */}
        <div className="flex justify-between mt-8 mb-5 items-center">
          <div className="flex space-x-6 items-center">
            <Image
              src={badge2}
              className="w-14 h-14 bg-gray-800 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Dr. Hopkins</p>
              <p className="text-xs">Last visit: 13th - Dec - 2022 </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">View details</p>
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between mt-8 mb-5 items-center">
          <div className="flex space-x-6 items-center">
            <Image
              src={badge2}
              className="w-14 h-14 bg-gray-800 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Dr. Hopkins</p>
              <p className="text-xs">Last visit: 13th - Dec - 2022 </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">View details</p>
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between mt-8 mb-5 items-center">
          <div className="flex space-x-6 items-center">
            <Image
              src={badge2}
              className="w-14 h-14 bg-gray-800 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Dr. Hopkins</p>
              <p className="text-xs">Last visit: 13th - Dec - 2022 </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">View details</p>
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between mt-8 mb-5 items-center">
          <div className="flex space-x-6 items-center">
            <Image
              src={badge2}
              className="w-14 h-14 bg-gray-800 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Dr. Hopkins</p>
              <p className="text-xs">Last visit: 13th - Dec - 2022 </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">View details</p>
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
      </div>
    </div>
  );
};
