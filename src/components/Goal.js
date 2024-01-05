import React from "react";
import { ActiveGoals, CompletedGoals } from "./GoalCard";

export const Goal = () => {
  return (
    <div class="min-h-screen bg-gray-50 pb-6 rounded-xl">
      <div class="mx-auto">
        <main class="">
          <div class="flex items-center justify-between mt-6 border-b-2 border-gray-400 pb-2">
            <h2 class="ml-4 text-2xl font-semibold text-gray-900 ">My Goals</h2>
            <div class="mr-4 flex w-full items-center justify-between rounded-lg border px-3 py-3 sm:w-[350px] sm:flex-initial">
              <input
                class="w-full text-sm outline-none text-black"
                type="text"
                placeholder="Search Goals"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          {/* Opened goals */}
          <ActiveGoals />
          {/* Completed goals */}
          <CompletedGoals />
          {/* Badges earned */}
          <div class="px-4">
            <div class="my-5">
              <h2 class="text-lg font-semibold text-gray-900">Earned Badges</h2>
            </div>
            <div className="flex space-x-6 justify-around">
              <div className="flex flex-col items-center">
                <p className="font-semibold text-gray-900">Cadet x1</p>
                <img
                  src='https://i.ibb.co/x8rf7GT/badge3.png'
                  className="w-20 h-20 bg-zinc-900 mb-3 mt-1 rounded-full p-3"
                />
                <p className="text-sm text-gray-600 max-w-30">
                  Earned for completing first goal
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-gray-900">Rosian x0</p>
                <img
                  src='https://i.ibb.co/P5H3WH3/badge1.png'
                  className="w-20 h-20 bg-zinc-900 mb-3 mt-1 rounded-full p-3"
                />
                <p className="text-sm text-gray-600 max-w-30">
                  Earned for completing 15 goals
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-gray-900">Veteran x0</p>
                <img
                  src='https://i.ibb.co/Tm8dz5W/badge5.png'
                  className="w-20 h-20 bg-zinc-900 mb-3 mt-1 rounded-full p-3"
                />
                <p className="text-sm text-gray-600 max-w-30">
                  Earned for completing 30 goals
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-gray-900">Sensei x0</p>
                <img
                  src='https://i.ibb.co/0Y3N0hd/badge2.png'
                  className="w-20 h-20 bg-zinc-900 mb-3 mt-1 rounded-full p-3"
                />
                <p className="text-sm text-gray-600 max-w-30">
                  Earned for completing 50+ goals
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
