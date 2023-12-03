'use client'

import { usePathname } from 'next/navigation'
import SideBarComponent from '@/components/SideBarComponent'
import Image from 'next/image'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'

function MasterDashboardComponent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <section className='w-full h-full bg-heroyellow2 bg-no-repeat bg-right-bottom'>
      <div className='bg-heroEllipse bg-no-repeat bg-right-top'>
        <div className='bg-heroyellow bg-no-repeat relative'>
          {pathname === "/login" || pathname === "/register" ? (
            children
          ) : (
            <>
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
                <div className=' hidden md:flex  min-w-[180px] md:w-[22%]'>
                  <SideBarComponent />
                </div>
                {/* content */}
                <div className=' ml-0 md:ml-[40px] w-full md:w-[86%]'>
                  {/* <ContentHome/> */}
                  {children}
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  )
}

export default MasterDashboardComponent