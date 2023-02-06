import React from 'react'
import loader from './assets/loader.svg'

export default function Loader() {
  return (
    <div className='flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-50 '>
        <div>
            <img src={loader} alt="Loader" />
        </div>
    </div>
  )
}
