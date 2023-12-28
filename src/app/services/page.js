"use client";

import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { useWeb5 } from "../web5Context";

export default function Home() {
  const { myDid, createAcc } = useWeb5();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar myDid={myDid} createAcc={createAcc} />
      <Profile myDid={myDid} />
    </main>
  );
}
