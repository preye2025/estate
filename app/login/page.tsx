import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-2 bg-[#FFF8DB] gap-8">
      <Image src="girlgoinghomeicon.svg" alt="hero" width={200} height={10} />
      <div>
        <p className='text-xl font-bold'>Welcome back</p>
        <p>Please enter your details</p>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <Link href="https://google.com" className='flex flex-row items-center justify-center border-1 p-3 pl-10 pr-10 rounded-2xl border-solid gap-1'>
            <Image src="/google.png" width={10} height={10} alt='image'/>
            <p>Continue with google</p>
          </Link>
        </div>
        <div className='flex flex-row gap-5'>
          <div className="h-[2px] w-full bg-black my-4" />
          or
          <div className="h-[2px] w-full bg-black my-4" />
        </div>
      </div>
      
      <div className='flex flex-col pl-5 pr-5 gap-5'>
        <div className='relative'>
          <input type="text" id="email" className='peer w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-orange-500' placeholder=""/>
          <label htmlFor="email" className="absolute left-4 bg-[#FFF8DB] top-0 -translate-y-1/2 px-2 text-gray-500 transition-all peer-focus:text-orange-500">email</label>
        </div>
        <div className='relative'>
          <input type="text" id="password" className='peer w-full  rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-orange-500' placeholder=""/>
          <label htmlFor="password" className="absolute left-4 bg-[#FFF8DB] top-0 -translate-y-1/2 px-2 text-gray-500 transition-all peer-focus:text-orange-500">Password</label>
        </div>
        <p>Forgot password?</p>
        <Link href="/createAccount" className="bg-[#EE7421] rounded-2xl text-white p-3.5 text-center">Log in</Link>
        <p>Dont have an account? Sign up</p>
      </div>


    </div>
  )
}

export default login