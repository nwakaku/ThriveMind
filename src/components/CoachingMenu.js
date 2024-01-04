import React from "react";
import Link from "next/link";
import Image from "next/image";
import badge from "/public/assets/badge.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ToolTip";
import StarRating from "./StarRating";
import { FaQuestionCircle } from "react-icons/fa";
import { useWeb5 } from "@/app/web5Context";


const data = [
  {
    imageUrl:
      "https://extension.sdstate.edu/sites/default/files/2019-03/02-05-01-32-First-Aid-Health.jpg",
    category: "Health Care",
    rating: 4.5,
    description:
      "Default thrive Bot, can provide guidance across many subjects",
  },
  {
    imageUrl:
      "https://www.yournewfoundation.com/wp-content/uploads/2020/01/Main_Marriage-Counseling_Foundations-Counseling-TX.jpg",
    category: "Relationship",
    rating: 4.5,
    description:
      "Default thrive Bot, can provide guidance across many subjects",
  },
  {
    imageUrl: "https://aihms.in/blog/wp-content/uploads/2020/08/mental1.jpg",
    category: "Mental Health",
    rating: 4.5,
    description:
      "Default thrive Bot, can provide guidance across many subjects",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/02/54/69/21/360_F_254692100_GdSqB6F8TkOUzpZrzxYu0xzAKit3jokp.jpg",
    category: "Marriage",
    rating: 4.5,
    description:
      "Default thrive Bot, can provide guidance across many subjects",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61GFi7mLFyL.jpg",
    category: "General",
    rating: 4.5,
    description:
      "Default thrive Bot, can provide guidance across many subjects",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/education-graduation-people-concept-group-happy-international-students-mortar-boards_396607-19131.jpg",
    category: "Academics",
    rating: 4.5,
    description:
      "Default thrive Bot, can provide guidance across many subjects",
  },
  // Add more objects for each image
];

export const CoachingMenu = () => {

  const { setCategory, category } = useWeb5();


  return (
    <>
      <div className="flex mb-1">
        <p className="text-gray-400 font-bold text-2xl">
          Top coaches in the community
        </p>
        <Image src={badge} className="w-8 h-8 mt-1" />
      </div>
      <p class="text-center text-gray-500 font-semibold text-sm mb-8 max-w-2xl">
        Access professional guidance and support across various disciplines at
        no cost. Our community of coaches is here to help you navigate
        challenges and fast-track your personal development journey.
      </p>
      <div className="grid grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div key={index} className="relative group bg-white">
            <img
              className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105 hover:rounded-lg"
              src={item.imageUrl}
              alt=""
            />
            {/* Text on the left top */}
            <div className="absolute top-2 left-2 flex items-center px-2 py-1 bg-black text-white rounded-lg">
              <StarRating rating={item.rating} />
            </div>

            {/* Text on the right top */}
            <div className="absolute top-2 right-2 px-2 py-1 bg-black font-semibold text-sm text-gray-200 rounded-lg">
              <p>{item.category}</p>
            </div>

            {/* Centered and larger button at the bottom */}
            <TooltipProvider>
              <Tooltip>
                <TooltipContent className="flex items-left justify-start">
                  <p className="text-white text-xs font-semibold w-max-4xl absolute bottom-1 right-1">
                    {item.description}
                  </p>
                </TooltipContent>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
                  <Link href="/chat">
                    <button
                      onClick={() => setCategory(item)}
                      className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-5 rounded-lg">
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
        ))}
      </div>
    </>
  );
};
