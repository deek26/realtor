import React from 'react'
import {FcGoogle,FcHome} from 'react-icons/fc'





export default function Button({title,back,pic,type,text,value,id,onClick}) {
  return (
    <button onClick={onClick} type={type} value={value} id={id} className={`flex items-center justify-center shadow-md hover:shadow-lg uppercase ${back} ${text?text:'text-white'} w-full  py-2 rounded-md`}>{pic?pic==='google'?<FcGoogle className='bg-white mr-3 text-2xl'/>:<FcHome className='bg-red-300 mr-3 rounded-full text-2xl'/>:''}{title}</button>
  )
}
