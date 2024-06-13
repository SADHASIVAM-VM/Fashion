import React from 'react'
import OfferBox from '../SubComponents/OfferBox'

const NewsLetters = () => {
  return (
    <div className='py-10'>
      <div className="flex justify-center items-center">
   <div className="">
   <h1 className='text-xl md:text-3xl font-bold my-2'>Get Exclusive Offers On Your Email</h1>
   <p className='text-center mb-2'>subscribe to our newsletter and stay updated</p>
   <div className="relative text-center">
    <input type="text" className='border  rounded-2xl border-black p-2 relative w-[90%] h-full px-5'/>
    <button className='bg-black text-white p-2 rounded-3xl absolute top-0 h-full right-0'>Subscribe</button>
   </div>
   </div>
  
      </div>
    </div>
  )
}

export default NewsLetters
