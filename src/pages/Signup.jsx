import React from 'react'
import { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import {db} from '../firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { serverTimestamp } from 'firebase/firestore'
import { setDoc,doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
  const [showPassword, setshowPassword] = useState(false)
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const navigate=useNavigate()


 async function onSubmit(e){
    e.preventDefault()
    try{
      if (name===''){
        throw {code:'auth/no-name'}
      }
      const auth = getAuth();
      const userCredentials=await createUserWithEmailAndPassword(auth, email, password)
      const user= userCredentials.user
      updateProfile(user, {
        displayName:name
      })
      const userDetails = {
        'name':name,
        'email': email,
        'timestamp': serverTimestamp()
      }
       await setDoc(doc(db,"users", user.uid), userDetails)
        toast.success('Registration Successful')
        navigate('/')
    }catch(error){
      const msg=displayErrors(error.code)

      toast.error(msg)
    }

    function displayErrors(code){
        switch(code){
          case 'auth/email-already-in-use':
            return "This Email Already Exist"

          case 'auth/invalid-email':
            return "Invalid Email"
          
          case 'auth/weak-password':
            return "Password Should Contain Atleast 6 Characters"

          case 'auth/no-name':
            return "Name is required"

          default:
            return "Something Went Wrong"

        }
    }

  }
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>
        Signup
      </h1>
      <div className='max-w-6xl mx-auto my-5 flex flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] mx-4 md:m-auto'>
          <img src="https://images-ext-1.discordapp.net/external/Y1eOHWZDv7oSzVw_zHjcbBRazRLUDWUyqEr9t0iyjcY/https/images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?width=630&height=473" 
           className='w-full rounded-2xl'
           alt="lock"
          />
        </div>

        <div className='mx-auto md:mt-6 lg:w-[40%] lg:ml-20 '>
          <form onSubmit={onSubmit}>
          <input
              type='text'
              className='w-full rounded-md h-8 border-gray-300 border-2 
              my-1 px-5 py-6 text-lg focus:border-blue-500 focus:outline-none 
              transition ease-in-out duration-300'
              placeholder='Enter Your Name'
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type='email'
              className='w-full rounded-md h-8 border-gray-300 border-2 
              my-1 px-5 py-6 text-lg focus:border-blue-500 focus:outline-none 
              transition ease-in-out duration-300'
              placeholder='Email Address'
              onChange={(e)=>setEmail(e.target.value)}
            />
            <div className='relative'>
            <input
              type={showPassword?'text':'password'}
              className='w-full rounded-md h-8 border-gray-300 border-2 
              my-1 px-5 py-6 text-lg focus:border-blue-500 focus:outline-none 
              transition ease-in-out duration-300'
              placeholder='Password'
              onChange={(e)=>setPassword(e.target.value)}
            />
            {showPassword?(
              <AiFillEye 
              className='cursor-pointer right-4 absolute top-[18px] text-[18px]'
              onClick={()=>setshowPassword(false)}
            />
            ):(
              <AiFillEyeInvisible 
                className='cursor-pointer right-4 absolute top-[18px] text-[18px]'
                onClick={()=>setshowPassword(true)}
              />
            )}  
            </div>
              <div className='flex justify-between'>
                <p className='text-lg'>Already Have An Account <Link to='/sign-in'
                className='font-semibold text-red-600'>Login</Link></p>
                <Link to='/forgot-password' className='font-semibold text-blue-500 text-lg cursor-pointer'>Forgot Password?</Link>
              </div>

              <Button title="Sign Up" back="bg-blue-500 " />
              
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
