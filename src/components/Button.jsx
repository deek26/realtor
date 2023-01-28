import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import {db} from '../firebase';
import {setDoc, doc, getDoc, serverTimestamp} from 'firebase/firestore'


export default function Button({title,back,pic,type,click}) {
  const navigate=useNavigate() 
   async function OAuth(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
     const userCredentials= await signInWithPopup(auth, provider)
     const user=userCredentials.user
     console.log(user)
     

     const docSnap=await getDoc(doc(db,"users", user.uid));
      if(!docSnap.exists()){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:user.displayName,
          timeStamp:serverTimestamp()
  
       })
      }
      navigate('/')
     toast.success("Logged In Successfully")
    } catch (error) {
      toast.error("Something Went Wrong")
    }
  }
  return (
    <button 
        onClick={click?OAuth:null} type={type} className={`uppercase flex items-center justify-center ${back} text-white w-full my-5 py-2 rounded-md 
        font-semibold`}>{pic?<FcGoogle className='bg-white mr-3'/>:''}{title}</button>

  )
}
