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
        <p className="font-semibold text-lg">Clinical data</p>
        <div className="flex ">
          <button className="text-indigo-500 flex items-center space-x-2 mr-6 ">
            <FaArrowUp />
            <p className=" text-sm ">Export Medical Records</p>
          </button>

          <button className="text-indigo-500 flex items-center space-x-2">
            <FaStoreAltSlash />
            <p className=" text-sm ">Sort</p>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="flex flex-col  mt-6">
        {/* Options available */}
        <div className="flex justify-between my-5 items-center ">
          <div className="flex space-x-4 items-center">
            <Image src={badge2} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Allergies</p>
              <p className="text-xs">3 diagnosed allergies </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">Allergies</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-5 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={badge4} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Clinical vitals</p>
              <p className="text-xs">24 vital records </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">Clinical vitals</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-5 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={badge2} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Conditions</p>
              <p className="text-xs">3 known conditions </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">Conditions</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-5 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={badge4} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Immunizations</p>
              <p className="text-xs">10 total Immunizations </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">Immunizations</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-5 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={badge2} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Test results</p>
              <p className="text-xs">124 lab results </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-4 ">Test results</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
      </div>
    </div>
  );
};
