import React, { useContext } from 'react';
import cross from '../../Assets/cross_icon.png';
import plus from '../../Assets/add_icon_green.png';
import minus from '../../Assets/remove_icon_red.png';
import noitem from '../../Assets/svg/NoItems.svg';
import { CreateContext } from '../../Controllers/ShopContext';
import { Link } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { animate, delay, motion } from 'framer-motion';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cartItems, setCartItems, handleRemove, calculateTotal } = useContext(CreateContext);

  const handleQuantityChange = (id, change) => {
    const newQuantity = Math.max(1, cartItems.find((item) => item.id === id).quantity + change);

    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };
  const notify = ()=>{
    toast.success('Itmes Removed', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
  }

  return (
    <div>
      <div className="my-2 flex flex-col md:flex-row">
        


      {cartItems.length !== 0 ? ( 
         <>
          <div className="md:w-3/4 h-[400px] overflow-scroll">

<table className="w-full ">
  <thead>
    <tr className="grid grid-cols-5 border-b-4 border-white py-2 bg-blue-100">
      <th>Items</th>
      <th>Name</th>
      <th>Qty</th>
      <th>Price</th>
      <th>Remove</th>
    </tr>
  </thead>
  <motion.tbody initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}}>
    {
      cartItems.map((item) => (
        <tr
          key={item.id}
          className="grid grid-cols-5 place-items-center  my-2 hover:bg-gray-200 py-2"
        >
          <td>
            <img src={item.img} alt="" className="w-10" />
          </td>
          <td>
            {item.name.length > 6
              ? item.name.slice(0, 10) + "..."
              : item.name}
          </td>
          <td>
            <div className="flex items-center gap-2">
              <img
                src={minus}
                alt=""
                className="w-8 cursor-pointer"
                onClick={() => handleQuantityChange(item.id, -1)} // Decrement quantity
              />
              <p className="text-xl font-bold">{item.quantity}</p>
              <img
                src={plus}
                alt=""
                className="w-8 cursor-pointer"
                onClick={() => handleQuantityChange(item.id, 1)} // Increment quantity
              />
            </div>
          </td>
          <td className='font-bold'>${item.price}</td>
          <td>
            <img
              src={cross}
              alt=""
              className="w-3 cursor-pointer"
            onClick={() =>{
              notify()
               handleRemove(item.id)
               }}
            />
          </td>
        </tr>
      ))
    }
  </motion.tbody>
</table>

</div>
<div className="md:hidden">
<hr className='mt-4 border-2 border-black'/>
</div>

<div className="md:w-1/4 glassEffect">
<div className="w-full h-full ">
  <div className="p-10 flex flex-col my-10 gap-3">
    <div className="subtotal flex justify-between ">
      <p>Subtotal</p>
      <p>{calculateTotal()}</p> 
    </div>
    <div className="delivery flex justify-between">
      <p>Delivery Fee</p>
      <p>$2</p>
    </div>
    <hr />
    <div className="total flex justify-between">
      <h5 className='font-bold'>Total</h5>
      <p>
        <span className="text-green-500 font-bold">$<CountUp start={0}  end={calculateTotal() + 2} duration={2}/></span>
      </p>
    </div>
  </div>
</div>
</div></>
        

        ): (<div className="flex justify-center w-full min-h-[500px] flex-col items-center">
                  <div className="">
                  <motion.h1 className='text-4xl text-gray-300' initial={{opacity:0, y:100}}
                  animate={{opacity:1, scale:1.1, y:0}}
                  transition={{delay:.8}}
                  
                  >No Products...</motion.h1>
                  <motion.img src={noitem} alt="" 
                  initial={{opacity:0, scale:0, x:-150}} 
                  animate={{opacity:1, scale:1.1, x:50}}
                  transition={{delay:.4}}/>
                  <p className='text-center my-10 text-cyan-500 underline hover:text-red-400'><Link to={'/'}className=' flex items-center justify-center gap-5'><BiLeftArrow/><span>
                  Back to Shop</span></Link> </p>
                  </div>
                </div>
              )
            }
      </div>
    </div>
  );
};

export default Cart;
