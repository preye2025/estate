import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CreateAccount = () => {
  return (
    <div>
      <div className="flex flex-col p-3 pl-20 pt-10 bg-[#EE7421] gap-5">
        <p className='text-white text-xl'>EstateEaze</p>
        <div className="flex flex-row gap-2">
          <p>Already have an account?</p>
          <Link href="/login" className='text-white'>Log in</Link>
        </div>
      </div>

      <div className="flex flex-col p-10 gap-5">
        <p className='text-[14px] font-bold'>Create your account</p>
        <div>
          <Link href="https://google.com" className='flex flex-row items-center justify-center border-1 p-5 rounded-2xl border-solid gap-1'>
            <Image src="/google.png" width={10} height={10} alt='image'/>
            <p>Log in with google</p>
          </Link>
        </div>
        <div className='flex flex-row gap-5'>
          <div className="h-[1px] w-full bg-black my-4" />
          or
          <div className="h-[1px] w-full bg-black my-4" />
        </div>
      </div>

      <div className='flex flex-col pl-10 pr-10 pb-5 gap-5'>
        <div className='relative'>
          <input type="text" id="fullname" className='peer w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-orange-500' placeholder=""/>
          <label htmlFor="fullname" className="absolute left-4 top-0 -translate-y-1/2 bg-white px-2 text-gray-500 transition-all peer-focus:text-orange-500">FullName</label>
        </div>
        <div className='relative'>
          <input type="text" id="email" className='peer w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-orange-500' placeholder=""/>
          <label htmlFor="email" className="absolute left-4 top-0 -translate-y-1/2 bg-white px-2 text-gray-500 transition-all peer-focus:text-orange-500">Email</label>
        </div>
        <div className='relative'>
          <input type="text" id="password" className='peer w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-orange-500' placeholder=""/>
          <label htmlFor="password" className="absolute left-4 top-0 -translate-y-1/2 bg-white px-2 text-gray-500 transition-all peer-focus:text-orange-500">Password</label>
        </div>
        <div className='relative'>
          <input type="text" id="password confirmation" className='peer w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-orange-500' placeholder=""/>
          <label htmlFor="password confirmation" className="absolute left-4 top-0 -translate-y-1/2 bg-white px-2 text-gray-500 transition-all peer-focus:text-orange-500">Confirm Password</label>
        </div>
        <p className='text-sm text-black font-light text-center'>I agree to all Terms, Privacy Policy and Fees</p>
        <Link href="/createAccount" className="bg-[#EE7421] rounded-2xl text-white p-3.5 text-center">Sign Up</Link>
      </div>
    </div>
  )
}

export default CreateAccount