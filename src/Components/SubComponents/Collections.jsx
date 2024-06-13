import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateContext } from '../../Controllers/ShopContext'
import { motion } from 'framer-motion'

const Collections = ({name,id, image, category, new_price, color}) => {
  const {ids, setIds,setCategory} = useContext(CreateContext)
  const navi = useNavigate()
  return (
    <div className={`border p-2 px-3 rounded-md  relative shadow-md`} onClick={(e)=> {
      setIds(id)
      setCategory(category)
      navi("/product")}}>
   
        <motion.div className="w-[200px] h-[350px] cursor-pointer" whileHover={{scale:1.1}}>
            <div className="card_title w-[200px] ">
            <h3 className='text-wrap'>{name.length > 30 ? name.slice(0,30)+"...": name}</h3>
                <img src={image} alt="" className='rounded-md shadow-md'/>
                {color && <p className='absolute -top-1 -right-2 p-1 bg-red-500 text-white rounded-md'>hot</p>}
            </div>
            <div className="card_body">
                
                
            <button className="button-57 mt-1 w-full font-bold text-black" role="button">BuyNow<span>$ {new_price}</span> </button>
            </div>
        </motion.div>

      
    </div>
  )
}

export default Collections
