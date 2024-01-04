"use client";

import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { useWeb5 } from "../web5Context";
import { PersonalForm } from "@/components/PersonalForm";
import { Info } from "lucide-react";

export default function Home() {
  const { myDid, createAcc, info } = useWeb5();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar myDid={myDid} createAcc={createAcc} info={info} />
      <div className="flex flex-col w-2/4">
        <Profile myDid={myDid} info={info} />
        {info ? null : <PersonalForm />}
      </div>
    </main>
  );
}
