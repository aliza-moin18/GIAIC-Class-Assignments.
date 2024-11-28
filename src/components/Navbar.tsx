"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const Links = [

    { name:"Destinations", path:"/destination"},
    { name:"Hotels", path:"/hotel"},
    { name:"Flights", path:"/booktrip"},
    { name:"Bookings", path:"/booking"},
    { name:"Login", path:"/contact"},
]

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="flex flex-col xl:flex-row gap-4 xl:gap-12">
    {Links.map((LinkItem, index) => {
      const isActive = pathname === LinkItem.path;
      return (
        <Link
          href={LinkItem.path}
          key={index}
          className={`${
            isActive ? "text-black" : "text-gray-600"
          } capitalize text-[18px] hover:text-black transition-all`}
        >
          {LinkItem.name}
        </Link>
      );
    })}
  </nav>
  );
};

export default Navbar;