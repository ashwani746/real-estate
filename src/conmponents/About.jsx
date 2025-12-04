import React from "react";
import { assets } from "../assets/assets";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x:200 }}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id='About'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          our brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
       "Our mission is to apply superior engineering and craftsmanship to every project, delivering uncompromising quality in metal fabrication and structural solutions. We are Passionate About Precision and Dedicated to our customers' vision, ensuring every structure we build offers lasting impact and reliability."
       
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-center md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">40+</p>
              <p>years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">1,2000+ </p>
              <p>Fabrication & Welding Assignments</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">98.90%</p>
              <p> Quality Rating - Customer Satisfaction Score</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">30+</p>
              <p>Ongoing Project</p>
            </div>
          </div>
             
          <p className="my-200 max-w-lg">
          Gyan Enterprises is a leading engineering and welding workshop in Varanasi, 
          dedicated to transforming raw metal into durable, precise, and 
          aesthetically pleasing structures. With a foundation built on 
          technical expertise and superior craftsmanship, we specialize 
          in delivering custom metal fabrication solutions for residential,
           commercial, and industrial needs. We are committed to exceeding 
           expectations through rigorous quality control and timely project completion.
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded">Learn more</button>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
