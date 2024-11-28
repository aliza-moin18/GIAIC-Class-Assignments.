"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Destination from "./destination/page";
import Hotel from "./hotel/page";
import BookYourTrip from "./booktrip/page";
import Contact from "./contact/page";
import Testimonial from "./booking/page";

export default function Home() {
  return (
    <section className="h-full pt-0 pb-5 ml-14">
      <div className="container mx-auto h-full px-10 xl:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between space-y-6 xl:space-y-0 xl:space-x-10">

  {/* Left Text Section */}
       <div className="text-left space-y-7">
          <h3 className="text-orange-500 font-bold text-[22px] uppercase"> 
            BEST DESTINATIONS AROUND THE WORLD  
          </h3>
          <h1 className="text-[#1d134b] text-5xl font-extrabold leading-tight"> 
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-gray-700 text-[19px] max-w-lg"> 
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. 
          </p>
          <Button className="bg-yellow-500 text-white p-7"> Find out more </Button>
          <button className=" text-gray-800 px-6 py-4 rounded hover:bg-gray-100 w-full sm:w-auto"><span className="mr-2 bg-red-600">▶</span> Play Demo</button>
          
          </div>

  {/* Right Image Section */}
      <div>
            <Image 
              src="/content.jpg" 
              alt="Travel" 
              width={700} 
              height={100} 
               className="rounded-md"
            />
         </div>
        </div>
       </div>
            <Hotel />
            <Destination />
            <BookYourTrip />
            <Testimonial />
            <Contact />
    </section>
  );
}; 