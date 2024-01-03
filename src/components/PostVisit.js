import React from "react";
import {
  FaArrowUp,
  FaGreaterThan,
  FaSort,
  FaSortDown,
  FaStoreAltSlash,
} from "react-icons/fa";
import ctk from "/public/assets/1.png";
import imans from "/public/assets/2.png";
import jj from "/public/assets/3.png";
import salford from "/public/assets/4.png";
import Image from "next/image";

export const PostVisit = () => {
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Header top */}
      <div className="flex justify-between space-x-4">
        <p className="font-semibold text-lg">Medical Check-in History</p>
        <div className="flex ">
          {/* <button className="text-indigo-500 flex items-center space-x-2 mr-6 ">
            <FaArrowUp />
            <p className=" text-sm ">Export Medical Records</p>
          </button> */}

          <button className="text-indigo-500 flex items-center space-x-2">
            <FaSortDown className="mb-2"/>
            <p className=" ">Sort</p>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="flex flex-col  mt-2">
        {/* Options available */}
        <div className="flex justify-between mt-8 mb-5 items-center">
          <div className="flex space-x-6 items-center">
            <Image
              src={ctk}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Christ The King Hospital</p>
              <p className="text-xs">Last visit: 22nd-June-2023 </p>
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
              src={salford}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Salford Medical Centre</p>
              <p className="text-xs">Last visit: 1th-May-2023 </p>
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
              src={imans}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">IMans Memorial Hospital</p>
              <p className="text-xs">Last visit: 8th-Oct-2022 </p>
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
              src={jj}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Jakes & Jakes Medical Centre</p>
              <p className="text-xs">Last visit: 11th-April-2022 </p>
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
