import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const tabs = () => {
  return (
    <div className='flex flex-row items-center justify-between p-2 pl-5 pr-5 bg-[#FADB7E]'>
      <Link href="/dashboard" className='flex flex-col items-center gap-2'>
        <Image src="/home-tab.png" alt="hero" width={25} height={25} loading="eager"/>
        <p>Home</p>
      </Link>
      <Link href="../dashboard/balancedue" className='flex flex-col items-center gap-2'>
        <Image src="/balancedue-tab.png" alt="hero" width={25} height={25} loading="eager"/>
        <p>Balance Due</p>
      </Link>
      <Link href="../dashboard/visitor" className='flex flex-col items-center gap-2'>
        <Image src="/visitor-tab.png" alt="hero" width={25} height={25} loading="eager"/>
        <p>My Visitor</p>
      </Link>
      <Link href="../dashboard/payment" className='flex flex-col items-center gap-2'>
        <Image src="/payment-tab.png" alt="hero" width={25} height={25} loading="eager"/>
        <p>Payment</p>
      </Link>
    </div>
  )
}

export default tabs