import React from 'react'

export default function Signin() {
  return (
    <section>
      <h1 className='text-3xl font-bold text-center py-6'>
        Signin
      </h1>
      <div className='max-w-6xl mx-auto my-5 flex flex-wrap items-center'>
        <div className='lg:w-[50%] md:w-[67%] mx-4 md:m-auto'>
          <img src="https://images-ext-1.discordapp.net/external/Y1eOHWZDv7oSzVw_zHjcbBRazRLUDWUyqEr9t0iyjcY/https/images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?width=630&height=473" 
           className='w-full rounded-2xl'
          />
        </div>

        <div className='mx-auto md:mt-6 lg:w-[40%] lg:ml-20 '>
          <form>
            <input 
              className='w-full rounded-md h-8 border-black border-2 my-1 px-3'
              placeholder='Email Address'
            />
            <input 
              className='w-full rounded-md h-8 border-black border-2 my-1 px-3'
              placeholder='Password'
            />
          </form>
        </div>
      </div>
    </section>
  )
}
