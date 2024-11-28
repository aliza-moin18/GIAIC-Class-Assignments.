"use client";

import React from 'react';
import Image from 'next/image';

const services = [
      { 
        img: "/weath.jpg", 
        title: "Calculated Weather", 
        description: "Built Wicket longer admire do barton vanity itself do in it." 
      },
      { img: "/areo.jpg", 
        title: "Best Flights", 
        description: "Engrossed listening. Park gate sell they west hard for the." 
      },
      { img: "/mic.jpg", 
        title: "Local Events", 
        description: "Barton vanity itself do in it. Preferd to men it engrossed listening." 
      },
      { img: "/sett.jpg", 
        title: "Customization", 
        description: "We deliver outsourced aviation services for military customers" 
      },
    ];
  
    
const Hotel = () => {
    return (
      <section className="bg-white py-12">
      <div className="text-center mb-10">
        <h3 className="text-orange-400 font-bold uppercase">Category</h3>
        <h1 className="text-5xl font-bold text-[#1d134b] mb-12">We Offer Best Services</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-9">
        {services.map((adv, index) => (
          <div
            key={index}
            className="w-[270px] h-[300px] bg-white rounded-2xl p-8 text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-white"
          >
            <div className="flex items-center justify-center w-20 h-12 mx-auto mb-10">
            <Image 
              src={adv.img} 
              alt={adv.title} 
              width={100} 
              height={64} 
              className="object-cover"
           />
            </div>
            <h3 className="text-2xl font-semibold text-[#1d134b] mb-6">{adv.title}</h3>
            <p className="text-sm text-black mt-2">{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
    );
  };
  
  export default Hotel;