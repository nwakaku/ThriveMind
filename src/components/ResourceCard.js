import React from "react";

export const ResourceCard = () => {
  return (
    <div class=" flex items-center justify-center ">
      <card class="bg-white p-8 w-[32rem] text-gray-900 rounded-lg">
        <header class="flex font-light text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-90 -ml-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
          <p>TECH BLOG</p>
        </header>

        <h2 class="font-bold text-3xl mt-2">
          Rapid Event Notification System at Netflix
        </h2>

        <p class="mt-5">
          By:
          <a href="#" class="text-red-600">
            {" "}
            Ankush Gulati{" "}
          </a>
          ,
          <a href="#" class="text-red-600">
            {" "}
            David Gevorkyan{" "}
          </a>
        </p>

        <p>
          Additional credits:
          <a href="#" class="text-red-600">
            {" "}
            Michael Clark{" "}
          </a>
          ,
          <a href="#" class="text-red-600">
            {" "}
            Gokhan Ozer{" "}
          </a>
        </p>

        <h3 class="font-bold text-xl mt-8"> Intro </h3>
        <p class="font-light">
          {" "}
          Netflix has more than 220 million active members who perform a variety
          of actions throughout each session, ranging from renaming a profile to
          watchi...{" "}
        </p>

        <button class="bg-red-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
          <p> READ MORE </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </card>
    </div>
  );
};
