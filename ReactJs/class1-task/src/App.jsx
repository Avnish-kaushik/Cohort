import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full px-4 py-4 ">
      <div className="bg-white">
        <Navbar />
        <Hero />
        <About/>
      </div>
    </div>
  )
}
export default App