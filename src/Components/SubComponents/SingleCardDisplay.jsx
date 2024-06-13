import React, { useContext } from "react";
import star_icon from "../../Assets/star_icon.png";
import star_dull from "../../Assets/star_dull_icon.png";
import { useNavigate } from "react-router-dom";
import { CreateContext } from "../../Controllers/ShopContext";

const SingleCardDisplay = (props) => {
  const { img, name, price,id } = props
  const {addToCart} = useContext(CreateContext)
  const navi = useNavigate();
  return (
    <div className="mx-5 md:mx-0">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="left flex gap-2 md:w-1/2">
          <div className="smImg flex flex-col gap-5">
            <img src={img} alt="" className="w-20" />
            <img src={img} alt="" className="w-20" />
            <img src={img} alt="" className="w-20" />
            <img src={img} alt="" className="w-20" />
          </div>
          <div className="">
            <img src={img} alt="" className="h-[440px]" />
          </div>
        </div>

        <div className="w:w-1/2 flex flex-col justify-around">
          <div className="">
            <div className="cont">
              <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
              <p className="md:text-xl my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                assumenda suscipit fugiat reprehenderit nobis quis pariatur
                numquam! Est, eum natus!
              </p>
            </div>

            <div className="rating flex items-center ">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull} alt="" />
              <p className="px-2 rounded-md font-mono bg-orange-600 text-white">
                (45k+)
              </p>
            </div>

            <div className="price">
              <h1 className="font-bold text-xl">
                Price : <del className="text-red-500">{45}</del>{" "}
                <span className="text-green-500">$ {price}</span>
              </h1>
            </div>
          </div>
          <div className="size flex items-center gap-2 overflow-scroll">
            <p className="p-3 px-5  hover:bg-slate-100 hover:cursor-pointer button-55">S</p>
            <p className="p-3 px-5  hover:bg-slate-100 hover:cursor-pointer button-55">M</p>
            <p className="p-3 px-5  hover:bg-slate-100 hover:cursor-pointer button-55">L</p>
            <p className="p-3 px-5  hover:bg-slate-100 hover:cursor-pointer button-55">XL</p>
            <p className="p-3 px-5  hover:bg-slate-100 hover:cursor-pointer button-55">XXL</p>
          </div>

          <div className="btns gap-2 text-white grid my-3 md:grid-cols-2 ">
            <button
               className=" rounded-md  button-74 bg-red-500 text-white hover:text-black"   role="button"
              onClick={() => navi("/")}
            >
              Back
            </button>
            <button
              className=" rounded-md  button-74  bg-green-500 text-white hover:text-black"   role="button"
              onClick={() => {addToCart(props)}}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDisplay;
