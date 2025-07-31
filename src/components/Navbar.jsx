import React, { useState } from "react";
import brandLogo from "../images/logo-dark.svg";
import navIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import clsx from "clsx";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="fixed  z-100 backdrop-blur-lg bg-white/80 top-0 left-0 w-full shadow-black flex justify-around items-center py-3">
      {/* brandLogo */}
      <div className="mr-auto px-10 lg:px-0 lg:mx-0">
        <img src={brandLogo} alt="" className="" />
      </div>
      {/* navigation */}
      {/* nav menu icon */}
      <div className="px-10 ">
        {" "}
        <img
          src={navIcon}
          onClick={handleMenuClick}
          className={clsx(
            isMenuOpen ? "hidden" : "block",
            "w-8 h-4 lg:hidden z-10 "
          )}
          alt=""
        />
        <img
          src={closeIcon}
          onClick={handleMenuClick}
          className={clsx(
            isMenuOpen ? "block" : "hidden",
            "w-6 h-6 lg:hidden "
          )}
          alt=""
        />
        {/* nav items on mobile */}
        <div
          className={clsx(
            isMenuOpen ? "absolute" : "hidden",
            "z-1 lg:hidden top-0 left-0 w-full h-screen bg-neutral-400/60"
          )}
          onClick={handleMenuClick}
        >
          {" "}
        </div>{" "}
        <div
          className={clsx(
            isMenuOpen ? "absolute" : "hidden",
            "z-2 mt-20  lg:hidden left-1/2 -translate-x-1/2  bg-white rounded-sm flex flex-col items-center py-5  w-9/10 "
          )}
        >
          {" "}
          <a className="px-5 py-2" href="">
            Home
          </a>
          <a className="px-5 py-2" href="">
            About
          </a>
          <a className="px-5 py-2" href="">
            Contact
          </a>
          <a className="px-5 py-2" href="">
            Blog
          </a>
          <a className="px-5 py-2" href="">
            Careers
          </a>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 text-neutral-400">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>
      {/* request invite  */}
      <div className="hidden lg:block">
        <button className=" font-medium bg-linear-80 from-green-400 to-blue-400 rounded-full text-white px-8 py-3">
          Request invite
        </button>
      </div>
    </div>
  );
}
