"use client"
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroComponent from '@/components/HeroComponent'
import TextAnimation from '@/components/textanimation/TextAnimationComponent'

const page = () => {
  return (
    <div className=''>
      <NavbarComponent/>
      <HeroComponent/>
      <TextAnimation/>
      <NavbarComponent/>
      <HeroComponent/>
    </div>
  )
}

export default page