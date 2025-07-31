import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-neutral-100 min-h-screen w-full ">
        {/* sections */}
        <div className="flex flex-col-reverse  lg:flex-row">
          {/* left */}
          <div className="flex flex-col items-start justify-center xl:justify-start mt-10 xl:mt-40 lg:items-start gap-10 w-full xl:w-1/2  px-10 lg:p-20 lg:px-30 xl:px-40  ">
            <h1 className="text-5xl text-neutral-800 text-wrap ">
              {" "}
              Next generation digital banking
            </h1>
            <p className="text-neutral-400">
              Take your financial life online. Your Digitalbank account will be
              a one-stop-shop for spending, saving, budgeting, investing, and
              much more.
            </p>
            <button className=" self-center lg:self-start bg-linear-80 from-green-400 to-blue-400 rounded-full text-white px-8 py-3">
              Request invite
            </button>{" "}
          </div>
          <div className="bg-[url(src/images/bg-intro-desktop.svg)]  bg-no-repeat bg-cover  ">
            <img src="src/images/image-mockups.png" className="  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
