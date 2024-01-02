"use client";

import { Navbar } from "@/components/Navbar";
import { useWeb5 } from "../web5Context";
import { Health } from "@/components/HealthMenu";

export default function Home() {
  const { myDid, createAcc, info } = useWeb5();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-20">
      <Navbar myDid={myDid} createAcc={createAcc} />
      <div className="flex flex-col w-full">
        <Health/>
      </div>
    </main>
  );
}
