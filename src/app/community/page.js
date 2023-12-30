"use client"

import { Navbar } from '@/components/Navbar'
import { useWeb5 } from '../web5Context';

const CommunityPage = () => {
  const { myDid, createAcc } = useWeb5();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar myDid={myDid} createAcc={createAcc} />
      
    </main>
  )
}

export default CommunityPage