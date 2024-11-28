"use client";

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
          <footer className="bg-white text-black py-2">
            
        {/* Footer Container */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 px-6">
  
              <div className="max-w-xs text-center sm:text-left">
                <h1 className="text-5xl font-semibold pt-10">Jadoo.</h1>
                <p className="mt-5 text-black text-[17px] leading-relaxed">
                   Book your trip in minute, get full Control for much longer.
                </p>
              </div>

          {/* Company */}
            <div className="max-w-xs text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:underline">Mobile</a></li>
                </ul>
              </div>
      
         {/* Contact */}
              <div className="max-w-xs text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline"> Help/FAQ </a></li>
                  <li><a href="#" className="hover:underline">Press</a></li>
                  <li><a href="#" className="hover:underline">Affilates</a></li>
                </ul>
              </div>  
           
      
         {/* More */}
         <div className="max-w-xs text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-4"> More </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline"> Airlinefees </a></li>
                  <li><a href="#" className="hover:underline"> Airline</a></li>
                  <li><a href="#" className="hover:underline"> Low fare tips </a></li>
                </ul>
              </div>  
           
            <div className="sm:col-span-2 lg:col-span-1 flex justify-center">
              <Image 
              src="/footer.png" 
              alt="Travel" 
              width={300} 
              height={200} 
               className="rounded-md"
            />
          </div>
            </div>

            <div className= "text-black py-6 mt-12 text-center border-t border-gray-400">
              <p className='text-sm sm:text-base'>All rights reserved@jadoo.co</p>
            </div>
        </footer>
  );
}

export default Footer;