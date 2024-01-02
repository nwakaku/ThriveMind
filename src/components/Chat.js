import { useWeb5 } from "@/app/web5Context";
import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

export const Chat = () => {
  // Use the web5 context
  const { AI, category } = useWeb5();

  // State to manage the user input
  const [chat, setChat] = useState("");

  // State to manage the chat history
  const [arrayChat, setArrayChat] = useState([
    { bot: "Okay, so what's your question?", user: "" },
    { bot: "Is there another question?", user: "" },
    { bot: "Please wait patiently", user: "" },
  ]);

  // Handler for input change
  const handleChange = (e) => {
    setChat(e.target.value);
  };

  // Handler for submitting questions
  const handleQuestions = (e) => {
    e.preventDefault();

    // Determine the property to update based on the order
    if (arrayChat[0].user === "") {
      setArrayChat((prevArrayChat) => [
        { ...prevArrayChat[0], user: chat },
        prevArrayChat[1],
        prevArrayChat[2],
      ]);
    } else if (arrayChat[1].user === "") {
      setArrayChat((prevArrayChat) => [
        prevArrayChat[0],
        { ...prevArrayChat[1], user: chat },
        prevArrayChat[2],
      ]);
    } else if (arrayChat[2].user === "") {
      setArrayChat((prevArrayChat) => [
        prevArrayChat[0],
        prevArrayChat[1],
        { ...prevArrayChat[2], user: chat },
      ]);
    }

    // Clear the input after submitting
    setChat("");
  };

  // Function to get all user inputs as objects
  const getUserInputs = () => {
    const userInputs = arrayChat
      .map((chatItem) => ({ user: chatItem.user }))
      .filter((input) => input.user !== "");

    return userInputs;
  };

  // Handler for form submission
  const handleSubmit = async () => {
    console.log("Handling submission...");
    const userInputs = getUserInputs();
    // You can perform further actions with the chat data here
    // For example, use the AI context function
    const answer = await AI(userInputs, category);

    // Update the latest arrayChat object with the answer
    setArrayChat((prevArrayChat) => [
      prevArrayChat[0],
      prevArrayChat[1],
      { ...prevArrayChat[2], bot: answer }, // Update the 'bot' property with the answer
    ]);
  };

  useEffect(() => {
    if (arrayChat[2].user) {
      handleSubmit();
    }
  }, [arrayChat[2].user]);

  return (
    <div class="flex h-screen pb-2 antialiased text-gray-800">
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
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
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
                <div class="ml-2 text-sm font-semibold">I'm Happy </div>
              </button>
              <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  😄
                </div>
                <div class="ml-2 text-sm font-semibold">I'm Excited</div>
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
                <div class="ml-2 text-sm font-semibold">I'm Sad</div>
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

            <div class="flex flex-col h-full overflow-x-auto overflow-y-auto mb-4">
              <div class="flex flex-col h-full justify-end ">
                {/**/}
                <div class="grid grid-cols-12 gap-y-2">
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>
                        Welcome! What's your mood for today?
                        <p className="flex justify-around pt-2">
                          <div
                            onClick={() => setChat("I'm excited")}
                            className="flex items-center space-x-1 text-zinc-700 text-sm bg-blue-200 font-semibold rounded-3xl px-4 py-1">
                            <p>😄 Excited</p>
                          </div>
                          <div
                            onClick={() => setChat("I'm happy")}
                            className="flex items-center space-x-1 text-zinc-700 text-sm bg-blue-200 font-semibold rounded-3xl px-4 py-1">
                            <p>😊 Happy</p>
                          </div>
                          <div
                            onClick={() => setChat("I'm laughter")}
                            className="flex items-center space-x-1 text-zinc-700 text-sm bg-blue-200 font-semibold rounded-3xl px-4 py-1">
                            <p>😇 Laughter</p>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* man is what */}
                {arrayChat.map((chatItem, index) => {
                  if (
                    (index === 0 && chatItem.user === "") ||
                    (index === 1 && chatItem.user === "") ||
                    (index === 2 && chatItem.user === "")
                  ) {
                    return null; // Skip rendering if the corresponding property is not filled
                  }

                  return (
                    <div class="grid grid-cols-12 gap-y-2" key={index}>
                      <div class="col-start-6 col-end-13 p-3 rounded-lg">
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>{chatItem.user}</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>{chatItem.bot}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <form onSubmit={handleQuestions}>
              <div class="flex flex-row items-center h-16 rounded-xl bg-red-300 w-full px-4">
                <div>
                  <button class="flex items-center h-8 w-8 bg-blue-200 rounded-full justify-center text-gray-400 hover:text-gray-600">
                    <FaMicrophone />
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                    <input
                      value={chat}
                      onChange={handleChange}
                      type="text"
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
