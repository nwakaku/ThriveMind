<<<<<<< HEAD
"use client";

import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { useWeb5 } from "../web5Context";
import { PersonalForm } from "@/components/PersonalForm";
import { Journal } from "@/components/Journal";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const { myDid, createAcc, info } = useWeb5();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar myDid={myDid} createAcc={createAcc} />
      <Sidebar/>
    </main>
  );
}
=======
"use client"

import { Navbar } from '@/components/Navbar'
import { useWeb5 } from '../web5Context';

const JournalPage = () => {
  const { myDid, createAcc } = useWeb5();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar myDid={myDid} createAcc={createAcc} />
      
    </main>
  )
}

export default JournalPage
>>>>>>> 13b0ed7 (little)
