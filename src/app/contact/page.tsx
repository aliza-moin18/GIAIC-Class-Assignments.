"sue client";

import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='mt-20 mb-10'>
      <div className="bg-[#ebe5eb] pt-8 rounded-tl-[80px] min-h-[300px] sm:h-auto container mx-auto px-4 sm:px-8">

         <div className="flex justify-end sm:mt-[-50px] mt-[-20px]">
         <Image 
              src="/arrow.png" 
              alt="Travel" 
              width={70} 
              height={50} 
              
            /> 
          </div>

        <h1 className="text-gray-400 text-2xl sm:text-4xl text-center pt-8 sm:pt-12 pb-10 sm:pb-20">Subscribe to get information, latest news and other <br />  interesting offers about Jadoo</h1>

        <div className="flex flex-wrap justify-center gap-4 px-4">
        <input
              type="email"
              placeholder='Enter your email'
              name='email'
              className='border-none w-full sm:w-[400px] h-[45px] sm:h-[52px] pl-[10px] sm:pl-[20px] rounded-[5px] bg-white text-black text-[16px] sm:text-[19px] mb-4 sm:mb-20'
            />

           <button
              type="button" 
              className="border-none rounded-[6px] text-[#efefef] bg-[#e97b7b] text-[20px] py-[8px] px-[20px] mb-[80px] cursor-pointer transition-transform duration-300 hover:scale-110 mt-30 ml-5"
            >
              Subscribe
            </button>
        </div>
        </div>
    </section> 
  );
};

export default Contact;