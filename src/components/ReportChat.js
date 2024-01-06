import { useWeb5 } from "@/app/web5Context";
import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

export const ReportChat = () => {
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
    const answer = await AI(userInputs, "medical");

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
    <div className=" h-full w-full flex flex-col p-6">
      {/* Header top */}

      <div class="flex flex-col h-full justify-end ">
        {/* man is what */}
        {arrayChat.map((chatItem, index) => {
          if (
            (index === 0 && chatItem.user === "") ||
            (index === 1 && chatItem.user === "") ||
            (index === 2 && chatItem.user === "")
          ) {
            return null;
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
      {/* Main body */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 ">
        {/* Send message */}
        <form onSubmit={handleQuestions} className="w-2/3">
          <div className="flex flex-row items-center h-16 rounded-xl bg-indigo-500 w-full px-4">
            <button className="flex items-center h-8 w-8 bg-indigo-400 rounded-full justify-center text-gray-100 hover:text-gray-600">
              <FaMicrophone />
            </button>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  value={chat}
                  onChange={handleChange}
                  type="text"
                  className="flex w-full border rounded-lg focus:outline-none focus:border-indigo-300 pl-4 h-9"
                />
              </div>
            </div>
            <div className="ml-4">
              <button className="flex items-center justify-center bg-indigo-400 hover:text-gray-600 rounded-lg text-gray-100 px-3 py-1 flex-shrink-0">
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
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
        </form>
      </div>
    </div>
  );
};
