import React from 'react'
import maps from '../Assets/svg/Map.svg'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import v1 from '../Assets/video/Parcel.mp4'
import v2 from '../Assets/video/delivery.mp4'
const ActiveUsers = () => {
  return (
    <div>
      <div className="my-2">
        <img src={maps} alt="" />
        <div className="">
            <h1 className='text-4xl font-bold text-center text-red-500'>Our Users</h1>

        </div>
        
      </div>

    </div>
  )
}

export default ActiveUsers
