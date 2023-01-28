import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email,setEmail]=useState('')

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
      toast.success("Reset Email Sent Successfuly Please Check your Email")
    } catch (error) {
      toast.error("This Email Is Not Registered")
    }
  }
  
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>
        Forgot Password
      </h1>
      <div className='max-w-6xl mx-auto my-5 flex flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] mx-4 md:m-auto'>
          <img src="https://images-ext-1.discordapp.net/external/Y1eOHWZDv7oSzVw_zHjcbBRazRLUDWUyqEr9t0iyjcY/https/images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?width=630&height=473" 
          alt="lock"
           className='w-full rounded-2xl'
          />
        </div>

        <div className='mx-auto md:mt-6 lg:w-[40%] lg:ml-20 '>
          <form onSubmit={onSubmit}>
            <input
              type='email'
              className='w-full rounded-md h-8 border-gray-300 border-2 
              my-1 px-5 py-6 text-lg focus:border-blue-500 focus:outline-none 
              transition ease-in-out duration-300'
              placeholder='Email Address'
              onChange={(e)=>setEmail(e.target.value)}
            />
            
              <div className='flex justify-between'>
                <p className='text-lg'>Do Not Have An Account <Link to='/sign-up'
                className='font-semibold text-red-600'>Register</Link></p>
                
              </div>

              <Button title="Reset Password" back="bg-blue-500 " />
              
              <div className='flex items-center before:border-t before:flex-1 
              before:border-gray-300 after:border-t after:flex-1 after:border-gray-300
              '>
                <p className='font-semibold mx-3'>OR</p>
              </div>

              <Button type='button' click={true} title="Continue With Google" back="bg-red-500" pic="FcGoogle" />
              
          </form>
        </div>
      </div>
    </section>
  )
}
