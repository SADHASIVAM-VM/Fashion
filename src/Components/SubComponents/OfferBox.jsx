import React from 'react'
import side from '../../Assets/exclusive_image.png'
import bread from '../../Assets/breadcrum_arrow.png'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
 

const OfferBox = () => {
  const { scrollYProgress } = useViewportScroll()
const scale = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
 
  return (
    <motion.div className=' md:px-20 py-2' style={{ scale }} >
      <div className="flex md:justify-center px-5 justify-between md:gap-36 items-center border" >
        <div className="">
           <div className="">
           <h1 className='text-2xl md:text-4xl font-bold'>Exclusive</h1>
            <h1 className='text-2xl md:text-4xl font-bold'>Offers For You !</h1>
            <p className='mt-2'>ONLY ON NXIOS</p>
           </div>
           <div className="btn mt-2 ">
            <button className='bg-red-500 text-white p-1 px-3 rounded-2xl flex items-center gap-3'>Check Now <span className=''><img src={bread} alt="" /></span></button>
           </div>
        </div>

        <div className="" >
            <motion.img src={side} alt="" className='w-36' style={{
        scaleY: scrollYProgress
      }}/>
        </div>
      </div>
    </motion.div>
  )
}

export default OfferBox
