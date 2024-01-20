import React from 'react'
import Form from './form'

const page = () => {
  return (
    <div className='w-screen  h-screen justify-center items-center flex'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <Form />

        </div>
      </div>
    </div>
  )
}

export default page