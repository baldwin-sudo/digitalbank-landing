import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-neutral-100 min-h-screen w-full flex flex-col gap-10 ">
        <Hero />
        <Features />
        {/* sections */}
      </div>
    </div>
  );
}
