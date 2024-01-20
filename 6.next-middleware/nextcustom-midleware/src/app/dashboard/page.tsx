'use client'
import deleteCookies from '@/components/deleteCookies'
import React from 'react'
const page = () => {
  return (
    <div onClick={()=>deleteCookies()}>Logout</div>

  )
}

export default page