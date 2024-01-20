'use client'
import React, { FormEvent } from 'react'

const Form = () => {
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password'),
      }),
    });
    console.log({ response });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name='name' type="text" placeholder="name" className="input input-bordered w-full my-1" />
      <input name='email' type="email" placeholder="email" className="input input-bordered w-full my-1" />
      <input name='password' type="password" placeholder="password" className="input input-bordered w-full my-1" />
      <input name='confirm_password' type="password" placeholder="confirm_password" className="input input-bordered w-full my-1" />
      <div className="card-actions justify-end">
        <button className="btn btn-primary btn-sm" type='submit'>Register</button>
      </div>
    </form>
  )
}

export default Form