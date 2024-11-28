"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    image: "/book1.png",
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur elit ipsum consectetur dolor sit.",
  },
  {
    id: 2,
    image: "/book2.png",
    title: "Make Payment",
    description: "Lorem ipsum dolor adipiscing sit amet, consectetur elit ipsum dolor sit.",
  },
  {
    id: 3,
    image: "/book3.png",
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur ipsum elit ipsum dolor sit.",
  },
];

const BookYourTrip = () => {
  return (
    <section className="py-8 bg-white p-12">
      <div className="max-w-8xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
          
    {/* Left Side: Text Section */}
        <div>
          <h2 className="text-2xl text-gray-500 font-medium">Easy and Fast</h2>
          <h1 className="text-5xl font-bold text-gray-800 mt-0">
            Book Your Next Trip in 3 Easy Steps
          </h1>
            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={300}
                      height={50}
                      className="object-contain"
                    />
                </div>
              <div>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {step.title}
                  </h3>
                  <p className="text-[20px] text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Right Side: Image Section */}
        <div className="relative w-full h-[600px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mt-[-80px]">
            <Image
              src="/booktrip.jpg"
              alt="Trip to Greece"
              width={800}
              height={100}
              layout="intrinsic"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourTrip;