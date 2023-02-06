import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { db } from '../Firebase'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Profile() {
    const auth=getAuth()
    const navigate=useNavigate()
    const [name,setName]=useState(auth.currentUser.displayName)
    const [email,setEmail]=useState(auth.currentUser.email)
    const [edit,setEdit]=useState(false)

    function signOut(){
        auth.signOut();
        navigate('/')
        toast.info("Signed Out Successfully")
    }

    function onChange(e){
        setName(e.target.value)
    }

    async function onSubmit(){
        if(auth.currentUser.displayName!=name){
            //Updating User Value in Firebase Authentication
            updateProfile(auth.currentUser,{
                displayName:name
            })

            await updateDoc(doc(db,"users",auth.currentUser.uid),{
                name
            })

            toast.success("Profile Updated Successfully")
        }
    }
  return (
    <>
        <div className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
            <h1 className='text-center text-3xl font-bold mt-6'>My Profile</h1>

            <div className='w-full md:w-[50%] px-5 mt-6'>
                <form>
                    <input type="text"
                    value={name}
                    onChange={onChange}
                    disabled={!edit}
                    className={`mb-6 text-xl w-full px-4 py-2 text-gray-700 border-gray-400 outline-none border-1 rounded focus:border-gray-600 ${edit && "bg-red-200 focus:bg-red-200"}`}
                    />
                    <input type="email"
                    value={email}
                    disabled
                    className='mb-6 text-xl w-full px-4 py-2 text-gray-700 border-gray-400 outline-none border-1 rounded focus:border-gray-600'
                    />
                </form>

                <div className='flex justify-between text-lg mb-4'>
                    <p>Do you want to change your name ?  
                        <span 
                        className='text-red-600 hover:text-red-800 cursor-pointer transition duration-200 ease-in-out'
                        onClick={()=>{
                            edit && onSubmit()
                            setEdit((prevState)=>!prevState)
                        }}
                        > 
                            {edit?"Apply Changes":"Edit"}
                        </span>
                    </p>
                    <p 
                    onClick={signOut}
                    className='text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200 ease-in-out'>Sign out</p>
                </div>
                
                <Link to="/create-listing">
                    <Button type="button" title='Sell Or Rent Your Home' back='bg-blue-700' pic='home' />
                </Link>
                
            </div>
        </div>
    </>
    )
}
