import ContentHome from '@/components/ContentHome'
import HeaderContentHome from '@/components/HeaderContentHome'
import NavbarComponent from '@/components/NavbarComponent'
import SideBarComponent from '@/components/SideBarComponent'
import Image from 'next/image'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSolidDashboard } from 'react-icons/bi'
import { GiWolfHowl } from 'react-icons/gi'
import { IoMdNotificationsOutline } from 'react-icons/io'

function MasterDashboardComponent({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full h-full bg-heroyellow2 bg-no-repeat bg-right-bottom'>
      <div className='bg-heroEllipse bg-no-repeat bg-right-top'>
        <div className='bg-heroyellow bg-no-repeat relative'>
          {/* navbar */}
          <div className='px-12 pt-6 sticky w-full '>
            <div className='flex flex-row justify-between'>
              <div>
                <p className='text-[20px] font-bold'>Learn.io</p>
                <p className='text-[#8E9BAE] text-[12px]'>Learn.io</p>
              </div>
              <div className=' hidden md:flex flex-row  gap-5'>
                <Image
                  src="/assets/images/Group.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/assets/images/Group.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/assets/images/Group.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/assets/images/Group.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/assets/images/Group.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/assets/images/Group.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>

              <div className='flex flex-row justify-end '>
                <div>
                  <AiOutlineUser size="25" />
                </div>
                <div>
                  <IoMdNotificationsOutline size="25" />
                </div>
              </div>
            </div>

          </div>
          {/* sidebar & content */}
          <div className="w-full px-12 pt-3 sticky flex">
            <div className=' hidden md:flex w-[250px] md:w-[18%]'>
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
                <div className='bg-white  bg-opacity-70 mt-5 m-3 rounded-md shadow-xl py-2 w-[200px] text-sm'>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>Dashboard</div>
                  </div>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>Explore</div>
                  </div>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>My Setting</div>
                  </div>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>Calendar</div>
                  </div>
                </div>

                {/* content sidebar */}
                <div className='bg-white bg-opacity-70    mt-5 m-3 rounded-md shadow-xl py-2 text-sm'>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>Dashboard</div>
                  </div>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>Explore</div>
                  </div>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>My Setting</div>
                  </div>
                  <div className='flex flex-row gap-3 py-1 my-1 px-2'>
                    <div className='my-auto w-7'><BiSolidDashboard size={20} /></div>
                    <div className='my-auto'>Calendar</div>
                  </div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className=' ml-0 md:ml-[20px] w-full md:w-[82%]'>
              {/* <ContentHome/> */}
              {children}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MasterDashboardComponent