
"use client";

import { Navbar } from "@/components/Navbar";
import { useWeb5 } from "../web5Context";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const { myDid, createAcc, info, setNoteValue } = useWeb5();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-16">
      <Navbar myDid={myDid} createAcc={createAcc} />
      <Sidebar className='flex flex-col w-full' setNoteValue={setNoteValue} />
    </main>
  );
}


