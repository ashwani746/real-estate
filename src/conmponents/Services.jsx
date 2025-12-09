import { img } from "framer-motion/client";
import React, { useState } from "react";

const services = [
  {
    title: "Steel Gate Fabrication",
    desc: "We design and install modern, traditional, and custom steel gates for homes, societies, and commercial spaces. Our gates ensure security, strength, and elegant designs at affordable prices.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwyTqJD7v7LxCziCKNeFJmgbIEL1z4LTAGnANTeE7UKgrHzhHUZ4MhtT4LW8K8jlSdJkmp2DcFFXYSJ0-dwV0j7JvQoRnx5GThp3VGscxVg_wl7O98w6-JMZBAMENZ84G0iiF1eWn3WgdGP=s1360-w1360-h1020",
  },
  {
    title: "Balcony & Stair Railings",
    desc: "Enhance your home's safety and look with our balcony railings, stair railings, and safety grills. We specialize in steel and stainless steel railings with stylish finishing.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzsx7S2RIP07UuquJD5gUvDpLn2-pjzehBUh7OHeQ4IAU-QDAag72Ii000JQ4cKn0pqBJS4zRssfn4eD7V7-419F0kaJKrnYXNPCyNWc89w9iiRD6ywEUbtMjebOnHuLFBYY3YUrNVNSBg=s1360-w1360-h1020"
},
  {
    title: "Aluminium Fabrication",
    desc: "From windows, doors, and partitions to aluminium gates and frames, we provide long-lasting and lightweight aluminium fabrication solutions.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwyTqJD7v7LxCziCKNeFJmgbIEL1z4LTAGnANTeE7UKgrHzhHUZ4MhtT4LW8K8jlSdJkmp2DcFFXYSJ0-dwV0j7JvQoRnx5GThp3VGscxVg_wl7O98w6-JMZBAMENZ84G0iiF1eWn3WgdGP=s1360-w1360-h1020",
  },
  {
    title: "Glass Work & Partitions",
    desc: "Modernize your spaces with our glass partitions, doors, and railing work. Ideal for offices, homes, and commercial spaces in Noida & Delhi NCR.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwyTqJD7v7LxCziCKNeFJmgbIEL1z4LTAGnANTeE7UKgrHzhHUZ4MhtT4LW8K8jlSdJkmp2DcFFXYSJ0-dwV0j7JvQoRnx5GThp3VGscxVg_wl7O98w6-JMZBAMENZ84G0iiF1eWn3WgdGP=s1360-w1360-h1020",
  },
  {
    title: "Iron & Metal Fabrication",
    desc: "We create iron furniture, grills, shutters, beds, and custom metal structures designed for durability and affordability.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzpQPG4LpsPuqSlEX1E15oiZyEfd4SMSY-EARFuwQ2MpY0ZMDaaYOdXyvdTuyI0gCkhiCXcuSWbumi9_-Lkn46WJsy6_RqCF7xIpGyuiIY958YyYGuuHa55JIR5nLPMldvaZFD1JI5jAbA=s1360-w1360-h1020-rw"
},
  {
    title: "Custom Fabrication Work",
    desc: "Got a unique requirement? Our team provides tailor-made fabrication services as per your design and budget.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwgQVT6jP9eJJfjRKCT4ypjXrBlMR-KNO8U4LvI6s05cQnj9qCHHZGXHpN4Rjqfy5QzantOigHnjevfHMFHomGOCbhUbjHKp7hyH2bXFqabg3r3dxq7d_VHkAsl7FhDjDRIBFOPWLPtyhXe=w243-h406-n-k-no-nu"
},
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Key Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition border-b-4 border-[#5a0000]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6 flex flex-col justify-between min-h-[260px]">
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(item)}
                  className="mt-6 w-max bg-[#5a0000] text-white px-6 py-2 text-sm tracking-wider hover:bg-black transition"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ MODAL */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white w-[90%] md:w-[600px] rounded-lg overflow-hidden shadow-2xl relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* Modal Image */}
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-[260px] object-cover"
            />

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {selectedService.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedService.desc}
              </p>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-[#5a0000] text-white px-6 py-2 hover:bg-black transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
