import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-20 bg-white/30 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-20 lg:px-32">
        
        {/* Logo */}
        <img src={assets.logo} className="w-32 md:w-48" alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>

        {/* 📞 Mobile Number (VISIBLE ON ALL SCREENS) */}
        <a
          href="tel:+917007594150"
          className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-full text-sm md:text-base"
        >
          📞 +91 7007594150
        </a>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-all duration-300 ${
          showMobileMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="close"
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
