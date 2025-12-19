import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./conmponents/Header";
import About from "./conmponents/About";
import Projects from "./conmponents/Projects";
import Testimonials from "./conmponents/Testimonials";
import Contact from "./conmponents/Contact";
import Footer from "./conmponents/Footer";
import FabricationInquiryForm from "./conmponents/enquiryForm";
import Services from "./conmponents/Services";
import OurWorkGallery from "./conmponents/ourGallaryWork";
import WhyChooseUs from "./conmponents/whyChooseUs";

function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden bg-gradient-to-r from-white to-gray-400">
        <Header />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <OurWorkGallery />
        <WhyChooseUs />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/inquiry" element={<FabricationInquiryForm />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
