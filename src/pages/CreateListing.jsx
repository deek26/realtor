import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'

export default function CreateListing() {
    const [formData,setFormData]=useState({
        name:"",
        type:"rent",
        beds:1,
        bathroom:1,
        parking:"No",
        furnished:"No",
        address:'',
        description:'',
        offer:"No",
        price:500,
        discount:0,
        images:[]
    }) 
    function onChange(e){
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value
            
        }))
        console.log(formData)
    }

    const {name,type,beds,bathroom,parking,furnished,offer,address,description,price,discount,images}=formData

    return (
    <section className='max-w-md mb-6 mx-auto px-3'>
        <h1 className='text-3xl font-bold text-center mt-6'>
            Create a Listing
        </h1>

        <div className='mb-4'>
            <p className='mt-6 text-lg font-semibold'>Sell / Rent</p>
            <div className='flex space-x-4'>
                <Button title='Sell' id="type" value="sell" back={type==='sell'?'bg-slate-600':'bg-white'} text={type=='sell'?'':'text-black'} onClick={onChange} />
                
                <Button title='Rent' id="type" value="rent" back={type==='rent'?'bg-slate-600':'bg-white'} text={type=='rent'?'':'text-black'} onClick={onChange}  />
            </div>
        </div>
        

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Name</p>
            <input
                value={name} 
                type="text"
                id="name"
                className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
                placeholder='Name'
                onChange={onChange}
            />
        </div>

        <div className='flex mb-4'>
            <div className=''>
            <p className='text-lg font-semibold'>Beds</p>
            <input 
                type="number"
                value={beds}
                id="beds"
                onChange={onChange}
                className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            />
            </div>

            <div className=''>
            <p className='text-lg font-semibold'>Bathrooms</p>
            <input 
                type="number"
                value={bathroom}
                id="bathroom"
                onChange={onChange}
                className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Parking Spot</p>
            <div className='flex space-x-4'>
                <Button title='Yes' id="parking" value="Yes" back={parking==='Yes'?'bg-slate-600':'bg-white'} text={parking==='Yes'?'':'text-black'} onClick={onChange} />
                
                <Button title='No' id="parking" value="No" back={parking==="No"?'bg-slate-600':'bg-white'} text={parking==="No"?'':'text-black'} onClick={onChange}  />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Furnished</p>
            <div className='flex space-x-4'>
                <Button title='Yes' id="furnished" value="Yes" back={furnished==='Yes'?'bg-slate-600':'bg-white'} text={furnished==='Yes'?'':'text-black'} onClick={onChange} />
                
                <Button title='No' id="furnished" value="No" back={furnished==="No"?'bg-slate-600':'bg-white'} text={furnished==="No"?'':'text-black'} onClick={onChange}  />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Address</p>
            <textarea 
                type="text"
                className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
                placeholder='Address'
                value={address}
                onChange={onChange}
            >
            </textarea>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Description</p>
            <textarea 
                type="text"
                className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
                placeholder='Description'
                value={description}
                onChange={onChange}
            >
            </textarea>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Offer</p>
            <div className='flex space-x-4'>
                <Button title='Yes' back={offer==='Yes'?'bg-slate-600':'bg-white'} text={offer==='Yes'?'':'text-black'} id="offer" value="Yes" onClick={onChange} />
                
                <Button title='No' back={offer==='No'?'bg-slate-600':'bg-white'} text={offer==='No'?'':'text-black'} id="offer" value="No" onClick={onChange} />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Regular Price</p>
            <div className='flex  items-center space-x-4'>
                <input type="number" 
                    value={price}
                    onChange={onChange}
                    id="price"
                    className={`text-center ${type==='rent'?'w-full':'w-[50%]'} rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none`}                    
                />
                {type==='rent' && (
                <p className='w-full'>$ / Month</p>)}
            </div>
        </div>
        
        {offer==='Yes' && (
            <div className='mb-4'>
            <p className='text-lg font-semibold'>Discounted Price</p>
            <input type="number" 
                value={discount}
                onChange={onChange}
                id="discount"
                className='text-center w-[50%] rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'                    
            />
        </div>
        )}
        

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Images</p>
            <p className='text-gray-600 text-sm'>The first image will be the cover (Max 6).</p>
            <input
                type="file"
                className="w-full bg-white px-3 py-2 text-gray-600 border-gray-400 border rounded focus:border-gray-400 active:border-gray-400"
                accept='.jpg,.png,.jpeg'
                multiple
            />
        </div>

        <div className='mb-4 mt-8'>
            <Button title="Create Listing" back="bg-blue-600" />
        </div>

    </section>
  )
}
