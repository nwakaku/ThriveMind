"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { useWeb5 } from "../web5Context";
import journal from "/public/assets/journal.png";
import goals from "/public/assets/goals.png";
import plan from "/public/assets/plan.png";

const ChatPage = () => {
  const { myDid, createAcc } = useWeb5();
  return (
    <main className="flex min-h-screen px-24 pt-20">
      <Navbar myDid={myDid} createAcc={createAcc} />
      {/* Left section */}
      <section className="w-1/5 border border-red-700 p-4">
        <div className="flex flex-col h-2/3 justify-between border border-red-400">
          {/* Journal */}
          <div className="mb-4">
            <Image src={journal} className="h-16 w-16 mx-auto" />
            <p className="text-center mt-5">Journal</p>
          </div>

          {/* Goals */}
          <div className="mb-4">
            <Image src={goals} className="h-16 w-16 mx-auto" />
            <p className="text-center mt-5"> Goals</p>
          </div>

          {/* Plans */}
          <div>
            <Image src={plan} className="h-16 w-16 mx-auto" />
            <p className="text-center mt-5">Plans</p>
          </div>

          {/* Rating and tip section */}
          <div className="flex flex-col justify-end">
            <div className="item-center text-center mt-16">
              <p className="text-sm font-semibold text-gray-200">Send Tip</p>
              <p className="text-xs text-gray-400">
                Send a little token to appreciate your companion
              </p>

              <div className="flex mt-3 justify-center ">
                <input
                  type="number"
                  className=" border border-gray-300 px-2 rounded-md w-24"
                  placeholder="Amount"
                />

                <button className="ml-2 bg-blue-600 text-gray-200 text-sm px-3 rounded-md">
                  Send
                </button>
              </div>
            </div>
            {/* rating */}
            <div className="item-center text-center">
              <p className="text-sm font-semibold text-gray-200">Rate</p>
              <p className="text-xs text-gray-400">
                Rate your companion 
              </p>

              <div className="flex mt-3 justify-center ">
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right section (Main chat UI area) */}
      <section className="flex-1 border border-red-700 p-4"></section>
    </main>
  );
};

export default ChatPage;
