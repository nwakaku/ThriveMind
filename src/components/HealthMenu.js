import React from "react";
import badge1 from "/public/assets/badge1.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Records } from "./Records";

export const Health = () => {
  return (
    <div class="h-screen pb-16 antialiased text-gray-800">
      {/* Top header */}
      <div className="flex justify-between items-center mr-7 my-3">
        <div className="flex space-x-2 items-center">
          <Image src={badge1} className="w-10 h-10" />
          <p className="text-3xl font-bold ml-3 text-gray-200">Medical records</p>
        </div>
        <Button
          className=" bg-indigo-500 hover:bg-indigo-700"
          onClick={() => {
            // Add the logic for the create button click here
          }}
        >
          Import Your Records
        </Button>
      </div>
      <div class="flex flex-row h-[90%] w-full overflow-x-hidden">
        {/* side bar */}
        <div class="flex flex-col py-4 px-3 w-36 justify-around bg-white flex-shrink-0 my-6 rounded-xl">
          <button className="mx-auto hover:bg-gray-100 p-3 rounded-xl">
            <Image src={badge1} className="w-16 h-16 mx-auto" />
            <p className="text-lg text-gray-900 font-bold mt-1">Records</p>
          </button>
          <button className="mx-auto hover:bg-gray-100 p-3 rounded-xl">
            <Image src={badge1} className="w-16 h-16 mx-auto" />
            <p className="text-lg  text-gray-900 font-bold mt-1">Post Visits</p>
          </button>
          <button className="mx-auto hover:bg-gray-100 p-3 rounded-xl">
            <Image src={badge1} className="w-16 h-16 mx-auto" />
            <p className="text-lg  text-gray-900 font-bold mt-1">AI Doc.</p>
          </button>
          <button className="mx-auto hover:bg-gray-100 p-3 rounded-xl">
            <Image src={badge1} className="w-16 h-16 mx-auto" />
            <p className="text-lg text-gray-900 font-bold mt-1">Search</p>
          </button>
        </div>

        {/* Main chat  */}
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <Records/>
          </div>
        </div>
      </div>
    </div>
  );
};
