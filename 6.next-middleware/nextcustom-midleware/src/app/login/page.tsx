'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { SyntheticEvent, useState } from 'react'
import { NextResponse } from 'next/server'
import setCookies from '@/components/setCookies';

export const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};

const LoginScreen = () => {
  const [email, setEmail] = useState<any>('')
  const [password, setPassword] = useState<any>('')

  const router = useRouter()

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
   
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password: password
      })
    })
    .then(response => {
      // handle success
      return response.json();
    })
    .then(data => {
      setCookies({ role: 'admin', token: data.token })
      console.log(data);
      // update UI or perform other actions with the data
    })
    .catch(error => {
      // handle error
      console.log(error);
    });

  }

  return (
    <div className='w-screen h-screen justify-center items-center flex'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login!</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full my-3 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full my-3 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="card-actions justify-end ">
              <button className="btn btn-primary btn-sm" type="submit">Login Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen