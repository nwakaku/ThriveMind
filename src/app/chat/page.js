"use client";

import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { useWeb5 } from "../web5Context";
import { PersonalForm } from "@/components/PersonalForm";
import { Chat } from "@/components/Chat";

export default function Home() {
  const { myDid, createAcc, info } = useWeb5();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-16">
      <Navbar myDid={myDid} createAcc={createAcc} />
      <div className="flex flex-col w-full">
        <Chat/>
      </div>
    </main>
  );
}
