import React from 'react'
import { useState } from 'react'

export default function Profile() {
    const [name,setName]=useState('Deeksha')
    const [email,setEmail]=useState('dbhargava675@gmail.com')
    
  return (
    <>
    <div className='max-w-6xl justify-center items-center flex flex-col mx-auto '>
        <h1 className='font-bold text-center text-3xl mt-6'>
            My Profile
        </h1>

        <div className='w-full md:w-[50%] px-5 mt-6'>
            <form>
                <input type="text"
                    value={name}
                    disabled
                    className='px-4 text-xl w-full py-2 text-gray-600 border-gray-400 rounded outline-none border-1 focus:border-gray-600 mb-6'
                > 
                </input>

                <input type="email"
                    value={email}
                    disabled
                    className='px-4 text-xl w-full py-2 text-gray-600 border-gray-400 rounded outline-none border-1 focus:border-gray-600 mb-6'
                > 
                </input>
            </form>

            <div className='flex text-lg justify-between'>
                <p>Do you want to change your name ?
                    <span className='text-red-600 hover:text-red-800 transition duration-200 cursor-pointer'> Edit</span>
                </p>

                <p className='text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer'>
                    Sign out
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
