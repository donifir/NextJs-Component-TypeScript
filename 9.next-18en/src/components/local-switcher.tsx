'use client'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'

const LocalSwitcher = () => {
  const [isPending, startTransition]=useTransition();

  const router = useRouter()
  const  localActive = useLocale()

  const onSelectChange = (e: any) => {
    const nextLocale=e.target.value
    startTransition(()=>{
      router.replace(`/${nextLocale}`)
    })
  }

  return (
    <div>
      <label htmlFor="" className='border-2 rounded'>
        <p className='sr-only'>change language</p>
        <select className='bg-transparent py-2' onChange={onSelectChange} defaultValue={localActive} disabled={isPending}>
          <option value="en">englisg</option>
          <option value="id">indonesia</option>
        </select>
      </label>
    </div>
  )
}

export default LocalSwitcher