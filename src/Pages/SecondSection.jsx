import React from 'react';
import img from '../assets/bg-second-section.jpg';

const SecondSection = () => {
  return (
    <div className='w-full h-[100vh] bg-cover' style={{ backgroundImage: `url(${img})` }}>
      <div className='text-white  font-bold flex  flex-col justify-evenly items-center h-[100vh] '>
        <div className='text-center'>

           <span className='text-8xl'>ZARA</span>
           <br />
           <span>
           It specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes. The head office is in Arteixo, in A Coruña in Galicia.
           </span>
        </div>
        </div>
    </div>
  );
};

export default SecondSection;
