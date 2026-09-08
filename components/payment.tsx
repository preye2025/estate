import React from 'react'
import Image from 'next/image'

const payment = () => {
  return (
    <div className='flex flex-row items-center justify-between p-8 border-b-[#f1eeee] border-b-2'>
      <div className='flex flex-row gap-5 items-center'>
        <Image src="/hamburger-menu.png" alt="hero" width={20} height={20} loading="eager"/>
        <div className='flex gap-2'>
          <Image src="/balancedue-tab.png" alt="hero" width={20} height={20} loading="eager"/>
          <p>Make Payment</p>
        </div>
      </div>
      <div className='flex flex-row gap-5'>
        <Image src="/question.png" alt="hero" width={20} height={20} loading="eager"/>
        <Image src="/notification.png" alt="hero" width={20} height={20} loading="eager"/>
        <Image src="/profile.png" alt="hero" width={20} height={20} loading="eager"/>
      </div>
    </div>
  )
}

export default payment