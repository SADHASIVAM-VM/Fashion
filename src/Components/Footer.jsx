import React from 'react'
import logo from "../Assets/logo.png";
import wha from "../Assets/whatsapp_icon.png"
import ptr from "../Assets/pintester_icon.png"
import ig from "../Assets/instagram_icon.png"
import { BiMailSend } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className='bg-purple-200  py-10 px-10'>
      <div className="grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-10">
        <div className="">
        <p onClick={()=> navi("/")} className="fontCursive text-xl font-bold cursor-pointer"> NIXOS</p> 
        </div>
        <div className="">
            <h1 className='md:text-xl font-bold'>Contact</h1>
            <p>983948934</p>
            <p > <a href="mailto:sadhasivam4848@gmail.com" className='flex items-center gap-2'> <BiMailSend className='text-xl'/> <span className='hidden sm:block'>sadhasivam4848@gmail.com</span></a></p>
        </div>
        <div className="links">
            <h1 className='md:text-xl font-bold'>Link with us</h1>
            <div className="flex gap-3 mt-2">
                <img src={ig} alt=""/>
                <img src={ptr} alt="" />
                <img src={wha} alt="" />
            </div>
        </div>
      </div>
      <hr className='border border-black my-10'/>
      <p className='text-center'>Copy Rights By <span className='fontCursive'>NXIOS</span>, All Reserved.</p>
    </div>
  )
}

export default Footer
