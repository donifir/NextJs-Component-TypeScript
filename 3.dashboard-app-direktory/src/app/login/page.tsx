'use client'
import Image from 'next/image'
import React, { SyntheticEvent } from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter()

  const onSubmit =(e: SyntheticEvent)=>{
    e.preventDefault();
    console.log('data')
    router.push('/')
  }
  return (
    <div className='flex justify-center items-center h-screen  w-screen '>
      <div className='w-[600px] h-[350px] rounded-lg bg-blue-300 shadow-md p-5'>
        <div className='flex flex-row'>
          <div className='w-[45%] flex justify-center items-center  h-[300px]'>
            <Image
              src="/assets/images/humanpc.png"
              width={250}
              height={500}
              alt="Picture of the author"
              className='h-auto w-auto'
            />
          </div>
          <div className='w-[50%] justify-center'>
            <div className='text-2xl text-[#1E1E1E] font-semibold mt-6 justify-center  w-full items-center flex'>
              Login
            </div>
            <div className='mt-3'>
              <form onSubmit={onSubmit}>
                <div className='mt-3'>
                  <label className='text-sm '>Username</label>
                  <input type="text" className="input w-full max-w-xs mt-2" />
                </div>
                <div className='mt-3'>
                  <label  className='text-sm '>Password</label>
                  <input type="text" className="input w-full max-w-xs mt-2" />
                </div>
                <div  className='mt-5 justify-center  w-full items-center flex'>
                  <button type="submit" className="btn btn-warning ">Warning</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page