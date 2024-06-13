import React from 'react'
import new_collections from '../../Assets/new_collections'
import Collections from '../SubComponents/Collections'


const NewCollections = () => {

  return (
    <div className=' py-5 '>

      <div className="items-center flex justify-center">
      <h1 className='text-2xl font-bold items-center my-10 border-b-8 border-r-8 border-xl rounded-s-lg border-gray-900 inline-block bg-[#00ed46] p-2 shadow-xl text-gray-800 '>NEW COLLECTIONS</h1>
      </div>
     <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-center items-center md:px-20">
     {
        new_collections.map((itms)=>(
          <Collections key={itms.id} category={itms.category} image={itms.image} name={itms.name} new_price={itms.new_price} old_price={itms.old_price} id={itms.id}/>
        )).slice(0,10)
      }
     </div>
    </div>
  )
}

export default NewCollections
