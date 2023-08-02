import React from "react";
import Nike from "../assets/brandLogo/Nike.png";
import Adidas from "../assets/brandLogo/Adidas.png";
import Burberry from "../assets/brandLogo/Burberry.png";
import LV from "../assets/brandLogo/LV.png";
import Puma from "../assets/brandLogo/Puma.png";
import Men from "../assets/men.jpg";
const FirstSection = () => {
  const Logo = [Nike, Adidas, Burberry, LV, Puma];
  const Model = [];
  return (
    <div className="p-10 flex  flex-col  h-full gap-10">
      <div className="h-52  w-full flex justify-center gap-7 shadow-xl rounded-3xl">
        {Logo.map((res) => (
          <img
            src={res}
            alt={"img"}
            className="mix-blend-darken h-full"
          />
        ))}
      </div>
      <br />
      <div className="w-full max-h-1/2  p-10">
        <div className="transform rotate-90 origin-top-left max-w-[350px] px-2 text-2xl bg-black text-white mt-3">
          Latest Products...
        </div>
        <div className=" flex gap-3 px-2">
          <img
            src={Men}
            width={490}
            className="h-[500px]"
          />
          <div className="flex flex-wrap items-center gap-3  content-start">
            <div className="max-w-[400px]  rounded-xl text-center">
              <img src={Men} />
            </div>
            <div className="max-w-[400px]  rounded-xl text-center">
              <img src={Men} />
            </div>
            <div className="max-w-[400px]  rounded-xl text-center">
              <img src={Men} />
            </div>
            <div className="max-w-[400px]  rounded-xl text-center">
              <img src={Men} />
            </div>
            <div className="max-w-[400px]  rounded-xl text-center">
              <img src={Men} />
            </div>
            <div className="max-w-[400px]  rounded-xl text-center">
              <img src={Men} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
