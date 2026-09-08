import Amount from '@/components/amount'
import Balancedue from '@/components/balancedue'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const balancedue = () => {
  return (
    <div>
      <Balancedue/>
      <Amount/>
      <div className="flex flex-col gap-8 items-center pt-20 bg-[#FFF8DB] min-h-screen">
        <p className='text-[#5F6368] text-[12px]'>Subscribe to your monthly usage</p>
        <Image src="/credit-card-payment-icon.svg" width={200} height={130} alt='image'/>
        <Link href="../dashboard/payment" className='bg-[#EE7421] font-bold text-white p-4 pl-12 pr-12 rounded-2xl'>Make Payment</Link>
      </div>
    </div>
  )
}

export default balancedue