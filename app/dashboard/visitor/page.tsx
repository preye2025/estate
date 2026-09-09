import Visitor from '@/components/visitor'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Visitor/>
      <div className="flex flex-col gap-8 items-center pt-10 bg-[#FFF8DB] min-h-screen">
        <p className='text-[#5F6368] text-[12px]'>Subscribe to your monthly usage</p>
        <Image src="/add-visitor-icon.svg" width={200} height={130} alt='image'/>
        <Link href="../dashboard/visitor/addvisitor" className='bg-[#EE7421] font-bold text-white p-4 pl-12 pr-12 rounded-2xl'>Add Visitor</Link>
      </div>
    </div>
  )
}

export default page