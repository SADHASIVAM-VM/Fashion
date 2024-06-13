import React from 'react'
import all_product from '../../Assets/all_product'
import Collections from '../SubComponents/Collections'



const WomensCollections = () => {

  return (
    <div className='py-5'>

      <div className="items-center flex justify-center">
      <h1 className='text-2xl font-bold items-center my-10 border-b-8 border-r-8 border-xl rounded-s-lg border-gray-900 inline-block bg-[#00ed46] p-2 shadow-xl text-gray-800 '>WOMEN'S POPULAR </h1>
      </div>
     <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center items-center ">
     {
        all_product.filter((itms)=> itms.category === "women").map((itms)=>(
          <Collections key={itms.id} category={itms.category} image={itms.image} name={itms.name} new_price={itms.new_price} old_price={itms.old_price} id={itms.id}/>
        )).slice(0,4)
      }
     </div>
    </div>
  )
}

export default WomensCollections
