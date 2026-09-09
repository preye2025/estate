import Image from 'next/image'
import React from 'react'

const visitor = () => {
  return (
    <div className='flex flex-row items-center justify-between p-8 border-b-[#f1eeee] border-b-2'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src="/visitor-tab.png" width={15} height={15} alt='image'/>
        <p>Book a visitor</p>
      </div>
      <div className='flex flex-row gap-5'>
        <Image src="/question.png" alt="hero" width={20} height={20} loading="eager"/>
        <Image src="/notification.png" alt="hero" width={20} height={20} loading="eager"/>
        <Image src="/profile.png" alt="hero" width={20} height={20} loading="eager"/>
      </div>
    </div>
  )
}

export default visitor