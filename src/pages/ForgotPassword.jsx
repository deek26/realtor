import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {toast} from 'react-toastify'
import { doc,serverTimestamp,setDoc,getDoc } from 'firebase/firestore';
import {db} from '../Firebase'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email,setEmail]=useState('')
  const navigate=useNavigate()
  async function OAuth(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider)
      const user=userCredentials.user
      console.log(user)
      navigate('/')

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if(!docSnap.exists()){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:user.displayName,
          timestamp:serverTimestamp()
        })
      }

      
      toast.success("Logged in successfully")
    } catch (error) {
      toast.error("Something Went Wrong")
    }
    
  }
  
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
      toast.success("Reset Email Sent Successfully. Check your Inbox")
    } catch (error) {
      toast.error("This Email is Not Registered with us")
    }
  }
  
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>Forgot Password</h1>

      <div className='max-w-6xl mx-4 my-5 flex justify-center sm:mx-10 flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] '>
          <img 
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357' 
            className='w-full rounded-2xl'
            alt="lock"
          />
        </div>
        <div className='mx-auto w-full md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] sm:my-5 '>
          <form onSubmit={onSubmit}>
            <input 
              type='email'
              className='w-full rounded-lg h-8 px-5 py-6 
              border-gray-300 border-2 text-lg focus:border-blue-500 focus:outline-none
              transition ease-in-out duration-300'
              placeholder='Email Address'
              onChange={(e)=>setEmail(e.target.value)}
            />

            
            <div className='flex justify-between mb-4'>
              <p className='text-lg'>Don't Have An Account?<Link to='/sign-up' className='font-semibold text-red-600'> Register</Link></p>
              <Link to='/sign-in' className='font-semibold text-blue-500'>Signin Instead</Link>
            </div>
            
            <Button title='Reset Password' back='bg-blue-600'/> 
            
            <div className='flex items-center my-4 before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>OR</p>
            </div>
            
            <Button type="button" onClick={OAuth} title='Continue With Google' back='bg-red-500' pic='google' />
            
          </form>
        </div>
      </div>
    </section>
  )
}
