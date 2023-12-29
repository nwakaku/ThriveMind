import React from "react";
import Link from "next/link";
import Image from "next/image";
import badge from "/public/assets/badge.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ToolTip";
import StarRating from "./StarRating";
import { FaQuestionCircle } from "react-icons/fa";

export const CoachingMenu = () => {
  return (
    <>
      <div className="flex mb-1">
        <p className="text-gray-400 font-bold text-2xl">
          Top coaches in the community
        </p>
        <Image src={badge} className="w-8 h-8 mt-1" />
      </div>
      <p class="text-center text-gray-500 font-semibold text-sm mb-8 max-w-2xl">
        Access professional guidance and support across various disciplines at no cost. Our
        community of coaches is here to help you navigate challenges and
       fast-track your personal development journey.
      </p>
      <div className="grid grid-cols-3 gap-10">
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4.5} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>Health Care</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="flex items-left justify-start">
                <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                  Default thrive Bot, can provide guidance across many subjects
                </p>
              </TooltipContent>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                <Link href="/chat">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
                    Chat
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-1 right-4 font-semibold text-sm text-gray-200">
                <TooltipTrigger>
                  <FaQuestionCircle className="w-5 h-5" />
                </TooltipTrigger>
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4.5} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>Relationship</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="flex items-left justify-start">
                <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                  Default thrive Bot, can provide guidance across many subjects
                </p>
              </TooltipContent>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                <Link href="/chat">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
                    Chat
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-1 right-4 font-semibold text-sm text-gray-200">
                <TooltipTrigger>
                  <FaQuestionCircle className="w-5 h-5" />
                </TooltipTrigger>
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4.5} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>Mental Health</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="flex items-left justify-start">
                <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                  Default thrive Bot, can provide guidance across many subjects
                </p>
              </TooltipContent>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                <Link href="/chat">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
                    Chat
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-1 right-4 font-semibold text-sm text-gray-200">
                <TooltipTrigger>
                  <FaQuestionCircle className="w-5 h-5" />
                </TooltipTrigger>
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4.5} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>Marriage</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="flex items-left justify-start">
                <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                  Default thrive Bot, can provide guidance across many subjects
                </p>
              </TooltipContent>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                <Link href="/chat">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
                    Chat
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-1 right-4 font-semibold text-sm text-gray-200">
                <TooltipTrigger>
                  <FaQuestionCircle className="w-5 h-5" />
                </TooltipTrigger>
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>General</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="flex items-left justify-start">
                <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                  Default thrive Bot, can provide guidance across many subjects
                </p>
              </TooltipContent>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                <Link href="/chat">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
                    Chat
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-1 right-4 font-semibold text-sm text-gray-200">
                <TooltipTrigger>
                  <FaQuestionCircle className="w-5 h-5" />
                </TooltipTrigger>
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={5} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>Academics</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="flex items-left justify-start">
                <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                  Provides guidances on academics and student success
                </p>
              </TooltipContent>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                <Link href="/chat">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
                    Chat
                  </button>
                </Link>
              </div>
              <div className="absolute bottom-1 right-4 font-semibold text-sm text-gray-200">
                <TooltipTrigger>
                  <FaQuestionCircle className="w-5 h-5" />
                </TooltipTrigger>
              </div>
            </Tooltip>
          </TooltipProvider>
        </div>
      
      </div>
    </>
  );
};
