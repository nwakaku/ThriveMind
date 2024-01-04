import React from "react";

export const SummaryCard = () => {
  return (
    <div class=" flex items-center justify-center ">
      <card class="bg-white p-8 w-[32rem] text-gray-900 rounded-lg">
        <h2 class="font-bold text-2xl mt-2">Report Summary</h2>

        <p class="font-light mt-5">
          {" "}
          Netflix has more than 220 million active members who perform a variety
          of actions throughout each session, ranging from renaming a profile to
          watchi...{" "}
        </p>
      </card>
    </div>
  );
};
