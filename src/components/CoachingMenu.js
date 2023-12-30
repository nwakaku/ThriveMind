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

export const CoachingMenu = () => {
  return (
    <>
      <div className="flex mb-2">
        <p className="text-gray-400 font-bold text-2xl">
          Top coaches in the community
        </p>
        <Image src={badge} className="w-8 h-8 mt-1" />
      </div>
      <p class="text-center text-gray-500 font-semibold text-sm mb-8 max-w-2xl">
        Access professional guidance and support, all at no cost. Our diverse
        community of top coaches is here to help you navigate challenges and
        enhance your well-being and personal development journey.
      </p>
      <div className="grid grid-cols-3 gap-10">
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4.5} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>Thrive Bot</p> {/* Replace with your actual text */}
          </div>

          {/* Centered and larger button at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
                Chat
              </button>
            </Link>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>Info</TooltipTrigger>
                <TooltipContent>
                  <p className="text-gray-700 w-max-1xl">
                    Default thrive Bot, can provide guidance across many
                    subjects
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />

          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={4} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>DR. Matt</p> {/* Replace with your actual text */}
          </div>
          {/* Centered and larger button at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
                Chat
              </button>
            </Link>
          </div>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
            {/* Text on the left top */}
            <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={2} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>DR. Simps</p> {/* Replace with your actual text */}
          </div>
          {/* Centered and larger button at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
                Chat
              </button>
            </Link>
          </div>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Text on the left top */}
          <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
            <StarRating rating={3} />
          </div>

          {/* Text on the right top */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
            <p>P.E Dans</p> {/* Replace with your actual text */}
          </div>
          {/* Centered and larger button at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
                Chat
              </button>
            </Link>
          </div>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Centered and larger button at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
                Chat
              </button>
            </Link>
          </div>
        </div>
        {/* Repeat this div for each image */}
        <div className="relative group overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
            src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
            alt=""
          />
          {/* Centered and larger button at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
                Chat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
