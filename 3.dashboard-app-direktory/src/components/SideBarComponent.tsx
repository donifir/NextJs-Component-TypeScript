import Image from 'next/image'
import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { GiWolfHowl } from 'react-icons/gi'
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrSafariOption } from "react-icons/gr";


function SideBarComponent() {
  return (
    <div>
      <div className='flex flex-row gap-3'>
        <div className='bg-slate-100  rounded-full  w-16 h-16 flex justify-center items-center'>
          <GiWolfHowl size={45} />
        </div>
        <div className='flex justify-center items-center '>
          <p className=' text-2xl'>Donifir</p>
        </div>
      </div>

      {/* content sidebar */}
      <div className='bg-white  bg-opacity-70 mt-5 m-3 rounded-md shadow-xl py-2 w-[180px] text-sm'>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><LuLayoutDashboard size={18} /></div>
          <div className='my-auto'>Dashboard</div>
        </div>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><GrSafariOption size={18} /></div>
          <div className='my-auto'>Explore</div>
        </div>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><IoSettingsOutline size={18} /></div>
          <div className='my-auto'>My Setting</div>
        </div>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><IoCalendarNumberOutline size={18} /></div>
          <div className='my-auto'>Calendar</div>
        </div>
      </div>

      {/* content sidebar */}
      <div className='bg-white  bg-opacity-70 mt-5 m-3 rounded-md shadow-xl py-2 w-[180px] text-sm'>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><LuLayoutDashboard size={18} /></div>
          <div className='my-auto'>Dashboard</div>
        </div>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><GrSafariOption size={18} /></div>
          <div className='my-auto'>Explore</div>
        </div>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><IoSettingsOutline size={18} /></div>
          <div className='my-auto'>My Setting</div>
        </div>
        <div className='flex flex-row gap-3 py-1 my-1 px-2'>
          <div className='my-auto w-7'><IoCalendarNumberOutline size={18} /></div>
          <div className='my-auto'>Calendar</div>
        </div>
      </div>
    </div>
  )
}

export default SideBarComponent