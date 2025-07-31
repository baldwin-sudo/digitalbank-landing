import React, { useState } from "react";
import brandLogo from "../images/logo-dark.svg";
import navIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import clsx from "clsx";

// Navigation links array
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#features" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed z-100 backdrop-blur-lg bg-white/80 top-0 left-0 w-full shadow-black flex justify-around items-center py-3">
      {/* brandLogo */}
      <div className="mr-auto px-10 lg:px-0 lg:mx-0">
        <img src={brandLogo} alt="DigitalBank logo" />
      </div>

      {/* nav menu icon for mobile */}
      <div className="px-10 lg:hidden">
        <img
          src={navIcon}
          onClick={handleMenuClick}
          className={clsx(isMenuOpen ? "hidden" : "block", "w-8 h-4 z-10")}
          alt="Menu"
        />
        <img
          src={closeIcon}
          onClick={handleMenuClick}
          className={clsx(isMenuOpen ? "block" : "hidden", "w-6 h-6")}
          alt="Close menu"
        />

        {/* mobile overlay */}
        <div
          className={clsx(
            isMenuOpen ? "absolute" : "hidden",
            "z-1 top-0 left-0 w-full h-screen bg-neutral-400/60"
          )}
          onClick={handleMenuClick}
        ></div>

        {/* mobile nav items */}
        <div
          className={clsx(
            isMenuOpen ? "absolute" : "hidden",
            "z-2 mt-20 left-1/2 -translate-x-1/2 bg-white rounded-sm flex flex-col items-center py-5 w-9/10"
          )}
        >
          {navLinks.map((link, index) => (
            <a key={index} className="px-5 py-2" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* desktop nav */}
      <div className="hidden lg:flex gap-4 text-neutral-400">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      {/* request invite button */}
      <div className="hidden lg:block">
        <button className="font-medium bg-gradient-to-r from-green-400 to-blue-400 rounded-full text-white px-8 py-3">
          Request invite
        </button>
      </div>
    </div>
  );
}
