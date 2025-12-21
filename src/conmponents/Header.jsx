import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
const Header = () => {
  const headingText =
    "Gyan Enterprises Engineering solutions that build strength, safety, and trust.";
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        {/* Animated Heading */}
        <h3 className="text-base sm:text-lg md:text-xl inline-block max-w-3xl font-semibold pt-10">
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              animate={{
                x: [0, 6, 0], // subtle left → right motion
                color: ["#ffffff", "#60a5fa", "#38bdf8", "#ffffff"],
              }}
              transition={{
                delay: index * 0.04,
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h3>

        {/* Paragraph */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200">
          Trusted Fabrication Experts for iron gates, railings, shutters,
          aluminum windows, partitions, glass doors, and steel railing work.
          Serving Varanasi and surrounding areas at affordable prices.
        </p>

        {/* Buttons */}
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
