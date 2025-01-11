import React from "react"
import Header from "./conmponents/Header"
import About from "./conmponents/About"
import Projects from "./conmponents/Projects"
import Testimonials from "./conmponents/Testimonials"
import Contact from "./conmponents/Contact"
import Footer from "./conmponents/Footer"

function App() {

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-white to-gray-400">
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
