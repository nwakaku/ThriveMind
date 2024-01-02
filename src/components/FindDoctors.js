import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import search from "/public/assets/search1.png";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export const FindDoctors = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-900 p-12">
      <div>
        <Image src={search} className="w-28 h-28 mx-auto" />
        <p className="mt-5 font-bold text-lg ">
          Find Doctors and medical centres around your environment{" "}
        </p>
      </div>
      <div className="w-full mx-20 mt-5">
        <div className="flex flex-col items-start">
          <Label htmlFor="title" className="text-right my-3 font-semibold">
            Enter your location
          </Label>
          <Input className=" w-full focus:outline-none focus:ring-0" />
        </div>
        <div className="flex flex-col items-start mt-4">
          <Label htmlFor="title" className="text-right my-3 font-semibold">
            Medical condition
          </Label>
          <Input className=" w-full focus:outline-none focus:ring-0" />
        </div>
        <Button className='items-center mt-6 px-8 bg-indigo-500 hover:bg-indigo-700'>Search</Button>
      </div>
    </div>
  );
};
