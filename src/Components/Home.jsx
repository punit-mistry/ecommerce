import React from "react";
import image from "../assets/shoe-1.png";
import FirstSection from "../Pages/FirstSection";
import SecondSection from "../Pages/SecondSection";
const Home = () => {
  return (
    <>
      <div className="flex flex-row w-full h-[90vh] p-10 ">
        <div className="w-1/2  font-serif flex flex-col justify-between   p-5">
          <div className="text-7xl font-bold ">
            Searching For the shoe, watch, SSD & many more <br />
            <span className="text-3xl">we have got you cover ...</span>
          </div>
          <div className="text-2xl">
            <button className="bg-blue-800 text-white w-44 h-14 rounded-lg font-bold hover:bg-blue-400 transition duration-1000 hover:text-black">
              {" "}
              Show More{" "}
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center bg-green-200 shadow-xl  rounded-xl">
          <img
            src={image}
            className=" h-full  hover:translate-y-20 ease-out transition-all duration-1000"
          />
        </div>
      </div>

      <div className="w-full h-full bg-gray-200">
        <FirstSection />
      </div>

      <div className="w-full h-[100vh]">
        <SecondSection />
      </div>
    </>
  );
};

export default Home;
