"use client";

import React from "react";
import Image from "next/image";


const destinations = [
    {
        id: 1,
         image: "/des1.jpg", 
         title: "Rome, Italy",
         price: "$5.42k",
         duration: "10 Days Trip",
        
     },
     {
        id: 2,
        image: "/des2.jpg", 
        title: "London, UK",
        price: "$4.2k",
        duration: "12 Days Trip",
        
     },
     {
        id: 3,
        image: "/des3.jpeg",  
        title: "Full Europe",
        price: "$15k",
        duration: "28 Days Trip",
     },
]

const Destination = () => {
  return (
     <section className="py-3 bg-white mb-20">
         <div className="max-w-6xl mx-auto px-12 text-center">
           <h2 className="text-xl text-gray-700 font-medium">Top Selling</h2>
           <h1 className="text-5xl font-semibold text-gray-800 mt-2 mb-11">
             Top Destinations
          </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-[24px] shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-80">
              <Image
                src={destination.image}
                alt={destination.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {destination.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-indigo-600 font-medium">{destination.price}</p>
                <p className="text-gray-500 text-sm">{destination.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Destination;