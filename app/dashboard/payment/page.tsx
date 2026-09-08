import Amount from '@/components/amount'
import Payment from '@/components/payment'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
      <Payment/>
      <Amount/>
      <div className='min-h-screen bg-[#FFF8DB] flex flex-col items-center gap-2 pt-5'>
        <p>Payment Method</p>
        <div className='bg-white p-2 pl-10 pr-10 border-2 border-[#CACACA]'>
          <Image src="/paypal.png" width={60} height={20} alt='image'/>
        </div>
      </div>
    </div>
  )
}

export default page