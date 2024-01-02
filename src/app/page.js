"use client"

import { Jumb } from '@/components/Jumb'
import { Navbar } from '@/components/Navbar'
import { useWeb5 } from './web5Context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Records } from '@/components/Records';


export default function Home() {

  const { myDid, createAcc } = useWeb5();

  const router = useRouter();

  const pushNext = () => {
    router.push("/profile");
  };

  useEffect(() => {
    {
      myDid && pushNext();
    }
  }, [myDid]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar myDid={myDid} createAcc={createAcc} />
      {/* <Jumb/> */}
      <Records/>
    </main>
  )
}
