import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero.jsx";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-neutral-100 min-h-screen w-full ">
        <Hero />
        {/* sections */}
      </div>
    </div>
  );
}
