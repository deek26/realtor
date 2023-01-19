import React from 'react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Header(){
    const location=useLocation()
    const navigate=useNavigate()
    
    function matchRoute(route){
        if (route==location.pathname){
            return true
        }
    }

    
  return (

    // <h1>header</h1>


    <div className='bg-white border-b-2 shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-5 max-w-6xl mx-auto'>
            <div>
                <img 
                src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
                alt='Realtor Logo'
                className='h-5 cursor-pointer' 
                onClick={()=>navigate('/')}
                />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li 
                    className={`cursor-pointer py-3  text-slate-400 font-semibold  text-sm border-b-[3px] border-b-transparent 
                    ${matchRoute('/') && 'text-black border-b-red-600'}
                    `}
                    onClick={()=>navigate('/')}
                    >
                    Home
                    </li>

                    <li 
                    className={`cursor-pointer py-3  text-slate-400 font-semibold  text-sm border-b-[3px] border-b-transparent 
                    ${matchRoute('/offers') && 'text-black border-b-red-600'}
                    `}
                    onClick={()=>navigate('/offers')}
                    >
                    Offers
                    </li>

                    <li 
                    className={`cursor-pointer py-3  text-slate-400 font-semibold  text-sm border-b-[3px] border-b-transparent 
                    ${matchRoute('/sign-in') && 'text-black border-b-red-600'}
                    `}
                    onClick={()=>navigate('/sign-in')}
                    >
                    Signin
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
