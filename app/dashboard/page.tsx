import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-5 p-10 pt-15 bg-[#FFF8DB]">
        <div className="flex flex-col gap-5 p-5 bg-white">
          <div className='flex flex-row gap-2 font-bold text-[#5F6368] items-center'>
            <Image src="/balance-icon.png" alt="hero" width={30} height={30} loading="eager"/>
            <p>View Balance Due</p>
          </div>
          <p className='text-[#5F6368] text-[15px]'>This is a monthly payment for app usage. Your subscription gives you optimum benefits and flexibility.</p>
          <Link href="dashboard/balancedue" className='text-[#EE7421] font-bold'>Click here</Link>
        </div>

        <div className="flex flex-col gap-5 p-5 bg-white">
          <div className='flex flex-row gap-2 font-bold text-[#5F6368] items-center'>
            <Image src="/balance-icon.png" alt="hero" width={30} height={30} loading="eager"/>
            <p>My Visitors</p>
          </div>
          <p className='text-[#5F6368] text-[15px]'>Have the ability to invite your friends, loved ones and family without any delay or worries. </p>
          <Link href="dashboard/visitor" className='text-[#EE7421] font-bold'>Click here</Link>
        </div>

        <div className="flex flex-col gap-5 p-5 bg-white">
          <div className='flex flex-row gap-2 font-bold text-[#5F6368] items-center'>
            <Image src="/balance-icon.png" alt="hero" width={30} height={30} loading="eager"/>
            <p>Payments</p>
          </div>
          <p className='text-[#5F6368] text-[15px]'>All payments made and history are view and made from here. There are different methods to pay or subscribe.</p>
          <Link href="dashboard/payment" className='text-[#EE7421] font-bold'>Click here</Link>
        </div>
      </div>
    </>
  )
}

export default page