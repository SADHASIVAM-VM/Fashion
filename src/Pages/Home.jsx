import React from "react";
import arrow from "../Assets/arrow.png";
import hello from "../Assets/hand_icon.png";
import hero from "../Assets/hero_image.png";
import WomensCollections from "../Components/Womens/WomensCollections";
import NewCollections from "../Components/Kids/NewCollections";
import OfferBox from "../Components/SubComponents/OfferBox";
import NewsLetters from "../Components/NewsLetters/NewsLetters";
import ActiveUsers from "../Components/ActiveUsers";

const Home = () => {
  return (
    <div >
      <div className="">
   

        <div className=" w-full min-h-full pt-10 mt-1 bg-[#2a4eeb] rounded-md">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="md:w-1/2 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-10 justify-center text-white">
                <div className="text-center md:text-start ">
                  <p>NEW ARRIVALS ONLY</p>
                  <h1 className="text-6xl font-bold flex flex-col sm:flex-row items-center gap-5">
                    New{" "}
                    <span>
                      <img src={hello} alt="" className="w-20 shake" />
                    </span>
                  </h1>
                  <h1 className="text-4xl sm:text-6xl font-bold">collections</h1>
                  <h1 className="text-4xl sm:text-6xl font-bold">for everyone</h1>
                </div>

                <div className="w-full flex justify-center sm:justify-start">
                  <button className="bg-red-500 p-3 text-white px-3 rounded-3xl flex gap-2 items-center button-55 border-none">
                    Latest Collection{" "}
                    <span>
                      <img src={arrow} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 ">
              <img src={hero} alt="" className="w-[300px] md:w-[500px]" />
            </div>
          </div>
        </div>
        <WomensCollections/>
        <OfferBox/>
        
        <NewCollections />

        <NewsLetters/>
        <ActiveUsers/>
      </div>
    </div>
  );
};

export default Home;
