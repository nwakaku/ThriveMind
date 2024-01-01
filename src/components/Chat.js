import React from "react";
import { FaMicrophone, FaTimes } from "react-icons/fa";

export const Chat = () => {
  return (
    <div class="flex h-screen pb-16 antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        {/* side bar */}
        <div class="flex flex-col py-4 pl-4 pr-4 w-64 bg-white flex-shrink-0 my-6 rounded-xl">
          <div class="flex flex-row items-center justify-center h-8 w-full mt-5">
            <div class="flex items-center justify-center rounded-2xl text-blue-700 bg-indigo-100 h-8 w-8">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div class="ml-2 font-bold text-xl">Mental Health</div>
          </div>
          <div class="flex flex-col items-center bg-blue-200 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div class="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                class="h-full w-full"
              />
            </div>
            <div class="text-sm font-semibold mt-2">Dr. Simps</div>
            <div class="text-xs text-gray-500">
              Default thrive Bot, can provide guidance across many subjects
            </div>
          </div>
          <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold">Positive emotions</span>
              <span class="flex items-center justify-center bg-gray-300 h-6 w-6 rounded-full">
                34
              </span>
            </div>
            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
              <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  😊
                </div>
                <div class="ml-2 text-sm font-semibold">Happy </div>
              </button>
              <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  😄
                </div>
                <div class="ml-2 text-sm font-semibold">Excited</div>
              </button>
            </div>
          </div>
          <div class="flex flex-col mt-6">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold">Negative emotions</span>
              <span class="flex items-center justify-center bg-gray-300 h-6 w-6 rounded-full">
                30
              </span>
            </div>
            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
              <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  😞
                </div>
                <div class="ml-2 text-sm font-semibold">Sad</div>
              </button>
              <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  😔
                </div>
                <div class="ml-2 text-sm font-semibold">Hungry</div>
              </button>
            </div>
          </div>
        </div>

        {/* Main chat  */}
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {/* emotions listing space */}

            <p className="text-lg font-semibold text-center">Mood board</p>
            {/* Emotions */}
            <div className="flex justify-center space-x-5 align-top mt-2">
              <div className="flex items-center space-x-1 text-zinc-700 text-sm bg-blue-200 font-semibold rounded-3xl px-4 py-1">
                <p>😄 Excited</p>
                <button onClick="" className="focus:outline-none">
                  <FaTimes />
                </button>
              </div>
              <div className="flex items-center space-x-1 text-zinc-700 text-sm bg-blue-200 font-semibold rounded-3xl px-4 py-1">
                <p>😊 Happy</p>
                <button onClick="" className="focus:outline-none">
                  <FaTimes />
                </button>
              </div>
              <div className="flex items-center space-x-1 text-zinc-700 text-sm bg-blue-200 font-semibold rounded-3xl px-4 py-1">
                <p>😇 Laughter</p>
                <button onClick="" className="focus:outline-none">
                  <FaTimes />
                </button>
              </div>
            </div>

            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full justify-end">
                <div class="grid grid-cols-12 gap-y-2">
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div class="flex items-center justify-start flex-row-reverse">
                      <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel ipsa commodi illum saepe numquam maxime
                        asperiores voluptate sit, minima perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <FaMicrophone />
                </button>
              </div>
              <div class="flex-grow ml-4">
                <div class="relative w-full">
                  <input
                    type="text"
                    class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="ml-4">
                <button class="flex items-center justify-center bg-blue-400 hover:bg-blue-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                  <span>Send</span>
                  <span class="ml-2">
                    <svg
                      class="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
