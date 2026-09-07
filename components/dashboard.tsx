import React from 'react'
import Image from 'next/image'

const dashboard = () => {
  return (
    <div className='flex flex-row items-center justify-between p-8 border-b-[#f1eeee] border-b-2'>
        <p>
          Dashboard
        </p>
        <div className='flex flex-row gap-5'>
        <Image src="/question.png" alt="hero" width={20} height={20} loading="eager"/>
        <Image src="/notification.png" alt="hero" width={20} height={20} loading="eager"/>
        <Image src="/profile.png" alt="hero" width={20} height={20} loading="eager"/>
      </div>
    </div>
  )
}

export default dashboard