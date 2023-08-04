import React from "react";
import image from "../assets/shoe-1.png";
import FirstSection from "../Pages/FirstSection";
import SecondSection from "../Pages/SecondSection";
const Home = () => {
  const textStyle = {
    fontFamily: "REM, sans-serif",
    fontSize: "8rem",
    whiteSpace: "nowrap",
    animation: "marquee 10s linear infinite",
  };

  const outline = {
    WebkitTextStroke: "2px black", // Vendor prefix for WebKit-based browsers (e.g., Safari, Chrome)

    color: "white",
  };

  return (
    <>
      <div className="w-full h-96 flex justify-center items-center  uppercase">
        <span
          className="text-8xl w-full "
          style={textStyle}
        >
          Welcome to the <span style={outline}>World of Shopping</span> Bliss
        </span>
      </div>

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
        <div className="w-1/2 flex justify-center items-center bg-blue-200 shadow-xl  rounded-xl">
          <img
            src={image}
            className=" w-[600px]  max-h-[650px] rounded-xl bg-green-200 hover:-translate-y-20 drop-shadow-2xl ease-out transition-all duration-1000 shadow-2xl"
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
