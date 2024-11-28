"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white py-5 xl:py-2 text-black">
      <div className="max-w-screen-xl mx-auto px-9 flex justify-between items-center">
        <Link href="/" aria-label="Logo">
          <Image
            src="/logo.jpg"
            alt="Travel"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-20">
          <Navbar />
          <Link href="/">
            <Button className="bg-transparent border border-black hover:bg-gray-400">
              Sign up
            </Button>
          </Link>

          <select className="rounded-md px-2 py-1 text-gray-600">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
