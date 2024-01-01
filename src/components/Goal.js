import React from "react";
import badge1 from '/public/assets/badge1.png'
import badge2 from '/public/assets/badge2.png'
import badge3 from '/public/assets/badge3.png'
import badge4 from '/public/assets/badge4.png'
import badge5 from '/public/assets/badge5.png'

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
          <div class="px-4">
            <div class="my-3 flex items-center justify-between mt-5">
              <h2 class="text-lg font-semibold text-gray-900">Active Goals</h2>
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
              <div class="mb-6 rounded-lg bg-white p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div>
                      <h3 class="text-base font-semibold text-gray-900">
                        Physio-therapy session
                      </h3>
                      <span class="block text-xs font-normal text-gray-500">
                        Opened: 1-01-2024
                      </span>
                    </div>
                  </div>
                  <p class="text-sm font-medium text-indigo-500">
                    <span class="mr-0.5">+</span>Edit
                  </p>
                </div>
                <p class="my-6 text-sm font-normal text-gray-500">
                  I'm going for three sessions with miss Nitta for therapy ...
                </p>
                <div class=" flex items-center justify-between text-sm font-semibold text-gray-900">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span class="mr-1">5</span> Task
                  </div>
                  <div class="flex flex-col ">
                    <p class="text-gray-300 mb-2 text-sm">4/6 task completed</p>
                    <div class="w-full h-2 bg-blue-200 rounded-full">
                      <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 rounded-lg bg-white p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div>
                      <h3 class="text-base font-semibold text-gray-900">
                        Physio-therapy session
                      </h3>
                      <span class="block text-xs font-normal text-gray-500">
                        Opened: 1-01-2024
                      </span>
                    </div>
                  </div>
                  <p class="text-sm font-medium text-indigo-500">
                    <span class="mr-0.5">+</span>Edit
                  </p>
                </div>
                <p class="my-6 text-sm font-normal text-gray-500">
                  I'm going for three sessions with miss Nitta for therapy ...
                </p>
                <div class=" flex items-center justify-between text-sm font-semibold text-gray-900">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span class="mr-1">5</span> Task
                  </div>
                  <div class="flex flex-col ">
                    <p class="text-gray-300 mb-2 text-sm">4/6 task completed</p>
                    <div class="w-full h-2 bg-blue-200 rounded-full">
                      <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Completed goals */}
          <div class="px-4">
            <div class="my-3">
              <h2 class="text-lg font-semibold text-gray-900">
                Completed Goals
              </h2>
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
              <div class="mb-6 rounded-lg bg-white p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div>
                      <h3 class="text-base font-semibold text-gray-900">
                        Physio-therapy session
                      </h3>
                      <span class="block text-xs font-normal text-gray-500">
                        Closed: 1-01-2024
                      </span>
                    </div>
                  </div>
                  <p class="text-sm font-medium text-indigo-500">
                    <span class="mr-0.5">+</span>Edit
                  </p>
                </div>
                <p class="my-6 text-sm font-normal text-gray-500">
                  I'm going for three sessions with miss Nitta for therapy ...
                </p>
                <div class=" flex items-center justify-between text-sm font-semibold text-gray-900">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span class="mr-1">5</span> Task
                  </div>
                  <div class="flex flex-col ">
                    <p class="text-gray-300 mb-2 text-sm">4/6 task completed</p>
                    <div class="w-full h-2 bg-blue-200 rounded-full">
                      <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 rounded-lg bg-white p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div>
                      <h3 class="text-base font-semibold text-gray-900">
                        Physio-therapy session
                      </h3>
                      <span class="block text-xs font-normal text-gray-500">
                        Closed: 1-01-2024
                      </span>
                    </div>
                  </div>
                  <p class="text-sm font-medium text-indigo-500">
                    <span class="mr-0.5">+</span>Edit
                  </p>
                </div>
                <p class="my-6 text-sm font-normal text-gray-500">
                  I'm going for three sessions with miss Nitta for therapy ...
                </p>
                <div class=" flex items-center justify-between text-sm font-semibold text-gray-900">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span class="mr-1">5</span> Task
                  </div>
                  <div class="flex flex-col ">
                    <p class="text-gray-300 mb-2 text-sm">4/6 task completed</p>
                    <div class="w-full h-2 bg-blue-200 rounded-full">
                      <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 rounded-lg bg-white p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div>
                      <h3 class="text-base font-semibold text-gray-900">
                        Physio-therapy session
                      </h3>
                      <span class="block text-xs font-normal text-gray-500">
                        Closed: 1-01-2024
                      </span>
                    </div>
                  </div>
                  <p class="text-sm font-medium text-indigo-500">
                    <span class="mr-0.5">+</span>Edit
                  </p>
                </div>
                <p class="my-6 text-sm font-normal text-gray-500">
                  I'm going for three sessions with miss Nitta for therapy ...
                </p>
                <div class=" flex items-center justify-between text-sm font-semibold text-gray-900">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span class="mr-1">5</span> Task
                  </div>
                  <div class="flex flex-col ">
                    <p class="text-gray-300 mb-2 text-sm">4/6 task completed</p>
                    <div class="w-full h-2 bg-blue-200 rounded-full">
                      <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Badges earned */}
          <div class="px-4">
            <div class="my-5">
              <h2 class="text-lg font-semibold text-gray-900">Earned Badges</h2>
            </div>
            <div className="flex space-x-6 justify-around">
              <div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
