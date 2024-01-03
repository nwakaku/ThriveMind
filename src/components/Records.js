import React from "react";
import {
  FaArrowUp,
  FaGreaterThan,
  FaSort,
  FaSortDown,
  FaStoreAltSlash,
} from "react-icons/fa";
import result from "/public/assets/result.png";
import allergies from "/public/assets/allergies.png";
import vital from "/public/assets/vitals.png";
import conditions from "/public/assets/condition.png";
import immmunization from "/public/assets/immunization.png";

import Image from "next/image";

export const Records = () => {
  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Header top */}
      <div className="flex justify-between space-x-4">
        <p className="font-semibold text-lg">Clinical data</p>
        <div className="flex ">
          <button className="text-indigo-500 flex items-center space-x-2 mr-6 ">
            <p className=" text-sm ">Export Medical Records</p>
          </button>

          <button className="text-indigo-500 flex items-center space-x-2">
            <FaSortDown className="mb-2" />
            <p className=" text-sm ">Sort</p>
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="flex flex-col  mt-6">
        {/* Options available */}
        <div className="flex justify-between my-6 items-center ">
          <div className="flex space-x-4 items-center">
            <Image src={allergies} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Allergies</p>
              <p className="text-xs">3 diagnosed allergies </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-3 ">Allergies</p>
              <FaGreaterThan/>
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-6 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={vital} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Clinical vitals</p>
              <p className="text-xs">24 vital records </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-3 ">Clinical vitals</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-6 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={conditions} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Conditions</p>
              <p className="text-xs">3 known conditions </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-3 ">Conditions</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-6 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={immmunization} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Immunizations</p>
              <p className="text-xs">10 total Immunizations </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-3 ">Immunizations</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
        {/* Options available */}
        <div className="flex justify-between my-6 items-center">
          <div className="flex space-x-4 items-center">
            <Image src={result} className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Test results</p>
              <p className="text-xs">124 lab results </p>
            </div>
          </div>
          <div>
            <button className="text-indigo-500 flex items-center space-x-2 ">
              <p className=" text-sm mr-3 ">Test results</p>
              <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
      </div>
    </div>
  );
};
