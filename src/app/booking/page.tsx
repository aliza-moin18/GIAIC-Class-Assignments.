"use client";

import React from 'react';
import  Image  from 'next/image';

const Testimonial = () => {
  return (
    <section className="h-full pt-12 pb-5 ml-6 p-12">
    <div className="container mx-auto h-full px-10 xl:px-8">
      <div className="flex flex-col xl:flex-row items-center justify-between space-y-6 xl:space-y-0 xl:space-x-10">

{/* Left Text Section */}
     <div className="text-left space-y-7">
        <h3 className="text-orange-500 font-bold text-[22px] uppercase"> 
          TESTIMONIALS
        </h3>
        <h1 className="text-black text-6xl font-semibold leading-tight"> 
          What People Say About Us.
        </h1>
        <div className='pt-10'>
        <Image 
            src="/about.png" 
            alt="Travel" 
            width={90} 
            height={70} 
             className="rounded-md"
          />
         </div> 
    </div>

{/* Right Image Section */}
    <div>
          <Image 
            src="/testimonial.jpg" 
            alt="Travel" 
            width={700} 
            height={100} 
             className="rounded-md"
          />
       </div>
      </div>
     </div>
   
  {/* Flights */}
     <div className='pt-10'>
     <Image 
        src="/flights.jpg" 
        alt="Travel" 
        width={1200} 
        height={100} 
        className="rounded-md"
     />
     </div>
  </section>
  );
};

export default Testimonial;