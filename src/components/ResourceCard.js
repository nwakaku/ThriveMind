import React from "react";

export const ResourceCard = () => {
  return (
    <div class=" flex items-center justify-center ">
      <card class="bg-white p-8 w-[32rem] text-gray-900 rounded-lg">
        <h2 class="font-bold text-2xl mt-2">
          Tips and Resources
        </h2>

        <p class="mt-5">
          Resources:
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
          Additional resources:
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

        <h3 class="font-bold text-lg mt-8"> Medical Tips </h3>
        <p class="font-light">
          {" "}
          Netflix has more than 220 million active members who perform a variety
          of actions throughout each session, ranging from renaming a profile to
          watchi...{" "}
        </p>
      </card>
    </div>
  );
};
