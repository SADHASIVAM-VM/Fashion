import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import selector_icon from "../Assets/selector_icon.png";
import Cart from "../Assets/cart_icon.png";
import { menu } from "../Assets/NavbarData";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext } from "../Controllers/ShopContext";
import { FaTimes } from "react-icons/fa";
import { BsMenuButton } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const {cartItems} = useContext(CreateContext);
  const [isOpen, setIsOpen] = useState()
  const [active, setActive] = useState()
  console.log()
  const navi = useNavigate()
  return (
    <div className="w-full h-16  ">
      <div className="bg--200 w-full h-full flex justify-between items-center p-5">
        <div className="logo">
          <p onClick={()=> navi("/")} className="fontCursive text-xl font-bold cursor-pointer"> NIXOS</p> 
        </div>

        {/* Menu */}
        <div className="menu ">
        <div className="md:block hidden ">
          <ul className="flex gap-2 ">
            {menu.map((itms, index) => (
              <Link key={index} to={itms.lnk} onClick={()=> setActive(itms.nm) } className={`${active == itms.nm? 'active':' '}`}>
              <li
                
                className="cursor-pointer hover:border-b-2 hover:border-red-500">
                {itms.nm}
              </li></Link>
            ))}
          </ul>
        </div>


{    isOpen &&
<div className=" absolute z-10 bg-white w-full left-0 top-[65px] transition">
<div className=" flex justify-center text-center my-5">
   <ul className="flex gap-2 flex-col">
  {menu.map((itms, index) => (
    <Link key={index} to={itms.lnk}>
    <li
      
      className="cursor-pointer hover:border-b-2 hover:bg-gray-200"
    >
      {itms.nm}
    </li></Link>
  ))}
   <button className="rounded-2xl h-10 w-[150px] button-74 bg-[#00ed46] flex items-center justify-center">
              <Link to={'/login'}>Login</Link>
            </button>
</ul>

</div>
</div>
}
        </div>
        

        {/* Cart */}

        <div className="flex items-center gap-3">
          
          <div className="relative cursor-pointer">
            <img src={Cart} alt="" className="w-6" onClick={()=> navi("/cart")}/>
            <div className="absolute top-0 right-0">
            {
              cartItems.length !=0 ? <img src={selector_icon} alt="" className=" w-3"/>: " "
            }
            </div>
          </div>

          <div className="login hidden md:block">
            <BiLogIn onClick={()=> navi("/login")} className="text-3xl"/>
          </div>
          <div className="md:hidden cursor-pointer text-xl transition-all">
            {
              isOpen == true ? <FaTimes onClick={()=> setIsOpen(false)}/> :<BsMenuButton onClick={()=> setIsOpen(true)}/>
            }
            
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
