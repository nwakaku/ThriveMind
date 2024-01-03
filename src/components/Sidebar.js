import React, { useState } from "react";
import { Journal } from "./Journal";
import { useWeb5 } from "@/app/web5Context";

export const Sidebar = () => {
  const { myDid, noteValue, journal } = useWeb5();
  const [text, setText] = useState();

  console.log(text);

  return (
    <>
      <div class="flex antialiased h-screen pb-12 w-full text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          {/* side bar */}
          <div class="flex flex-col py-4 pl-4 pr-4 w-64 bg-white flex-shrink-0 my-6 rounded-xl">
            <div class="h-full px-3 py-4 overflow-y-auto bg-white ">
              <ul class="space-y-4 font-medium">
                {journal.map((item, index) => (
                  <li className="bg-gray-300 px-4 py-2 rounded-lg" key={index}>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                      <div
                        onClick={() => setText(item.note)}
                        className="flex flex-col"
                      >
                        <span className="ml-3 mt-2 whitespace-nowrap">
                          {item.note.slice(0, 12)}
                        </span>
                        <small>{item.timestampWritten}</small>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main chat  */}
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white h-full p-4">
              {/* journal */}
              <Journal text={text} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
