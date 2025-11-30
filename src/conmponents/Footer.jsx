import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-5 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden justify-between "
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <a href="#Header">
            <img src={assets.logo_dark} alt="Company Logo" className="logo" />
          </a>
          <p className="text-gray-400 mb-4 max-w-80">
            <span className="block mb-2">
              📍 Address: Near MSME, Chandpur Industrial Estate Rd, Varanasi, U.P. - 221106
            </span>
            <span className="block">
              📞 Contact:{" "}
              <a 
                href="tel:+919450406904" 
                className="hover:text-blue-500 hover:underline transition-colors"
              >
                +91 94504 06904
              </a>
              ,{" "}
              <a 
                href="tel:+917607016900" 
                className="hover:text-blue-500 hover:underline transition-colors"
              >
                76070 16900
              </a>{" "}
              ,{" "}
              <a 
                href="tel:+917007594150" 
                className="hover:text-blue-500 hover:underline transition-colors"
              >
                70075 94150
              </a>
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-500">
            <a href="#Header" className="curser-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="curser-pointer hover:text-gray-400">
              About
            </a>
            <a href="#Projects" className="curser-pointer hover:text-gray-400">
              Projects
            </a>
            <a
              href="#Testimonials"
              className="curser-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Gyan Enterprises delivers premium engineering and fabrication services, specializing in custom iron gates, steel railings, and modern security doors.
          </p>
          <div className="flex gap-2 mb-4 max-w-80">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none ww-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
      © 2025 Gyan Enterprises. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
