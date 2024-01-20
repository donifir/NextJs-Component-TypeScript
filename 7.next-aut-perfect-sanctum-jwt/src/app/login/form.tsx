'use client'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'

const Form = () => {
  const router = useRouter()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials',{
      email:formData.get('email'),
      password:formData.get('password'),
      redirect:false,
    })
    console.log(response,'ini adalaj response');
    if (!response?.error) {
      router.push('/')
      router.refresh();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type="email" placeholder="email" className="input input-bordered w-full my-1" />
      <input name='password' type="password" placeholder="password" className="input input-bordered w-full my-1" />
      <div className="card-actions justify-end">
        <button className="btn btn-primary btn-sm" type='submit'>Login</button>
      </div>
    </form>
  )
}

export default Form