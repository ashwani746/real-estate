import React from "react";
import { FaUsersCog, FaMoneyBillWave, FaTools, FaTruck, FaMapMarkerAlt, FaCogs } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUsersCog size={32} />,
      title: "Experienced Fabricators",
      desc: "Our skilled team has years of hands-on experience in welding, gate fabrication, aluminum windows, steel railings, and glass works. Every project is completed with precision and craftsmanship.",
    },
    {
      icon: <FaMoneyBillWave size={32} />,
      title: "Affordable Pricing",
      desc: "We believe in providing cost-effective fabrication services without compromising on quality. Whether you need an iron gate in Noida or an aluminum partition in Delhi NCR, we offer competitive rates.",
    },
    {
      icon: <FaTools size={32} />,
      title: "Custom Designs",
      desc: "Every home and business has unique requirements. That’s why we specialize in custom-designed gates, railings, shutters, and partitions that match your style and needs.",
    },
    {
      icon: <FaTruck size={32} />,
      title: "On-Time Delivery",
      desc: "We respect your time. Our fabrication projects are delivered on schedule with strict quality checks so you don’t face unnecessary delays.",
    },
    {
      icon: <FaMapMarkerAlt size={32} />,
      title: "Wide Service Area",
      desc: "We serve Noida, Greater Noida, Ghaziabad, Crossing Republic, Gaur City, Sector 16C, Bisrakh, Ek Murti, and all over Delhi NCR. Wherever you are, we’re a call away.",
    },
    {
      icon: <FaCogs size={32} />,
      title: "Complete Metal & Aluminum Solutions",
      desc: "From iron gates and railings to aluminum windows, glass partitions, and shutter repairing, we provide complete fabrication solutions under one roof.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Why Choose Noida Fabrication?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-16 text-lg leading-relaxed">
          At Noida Fabrication, we understand that when it comes to 
          <span className="font-semibold"> metal, steel, aluminum, and glass fabrication services</span>, 
          customers want the best balance of quality, affordability, and timely delivery. 
          Here’s why thousands of clients across Noida, Greater Noida, Ghaziabad, and Delhi NCR trust us.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-start text-left p-4">
              
              {/* Icon */}
              <div className="border w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-white shadow-md">
                {item.icon}
              </div>

              <h3 classend="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-lg font-semibold">
          Looking for reliable fabrication services near you?  
          <span className="font-normal"> Choose Noida Fabrication for durable, affordable, and professional solutions.</span>
        </p>

        {/* Button */}
        <button className="mt-6 px-8 py-3 bg-[#5a0000] text-white font-semibold rounded-md hover:bg-black transition">
          LEARN MORE
        </button>

      </div>
    </section>
  );
};

export default WhyChooseUs;
