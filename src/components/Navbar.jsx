import React, { useState } from "react";
import brandLogo from "../images/logo-dark.svg";
import navIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import clsx from "clsx";

// Navigation links array
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
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
    <>
      {/* Main Navbar */}
      <div className="fixed z-50 backdrop-blur-lg bg-white/80 top-0 left-0 w-full shadow-black flex justify-around items-center py-3">
        {/* brandLogo */}
        <div className="mr-auto px-10 lg:px-0 lg:mx-0">
          <img src={brandLogo} alt="DigitalBank logo" />
        </div>

        {/* nav menu icon for mobile */}
        <div className="px-10 lg:hidden">
          <img
            src={navIcon}
            onClick={handleMenuClick}
            className={clsx(
              isMenuOpen ? "hidden" : "block",
              "w-8 h-4 cursor-pointer"
            )}
            alt="Menu"
          />
          <img
            src={closeIcon}
            onClick={handleMenuClick}
            className={clsx(
              isMenuOpen ? "block" : "hidden",
              "w-6 h-6 cursor-pointer"
            )}
            alt="Close menu"
          />
        </div>

        {/* desktop nav */}
        <div className="hidden lg:flex gap-4 text-neutral-400">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-neutral-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* request invite button */}
        <div className="hidden lg:block">
          <button className="font-medium bg-gradient-to-r from-green-400 to-blue-400 rounded-full text-white px-8 py-3 hover:shadow-lg transition-shadow">
            Request invite
          </button>
        </div>
      </div>

      {/* Mobile overlay - positioned outside navbar */}
      <div
        className={clsx(
          isMenuOpen ? "fixed" : "hidden",
          "z-40 top-0 left-0 w-full h-screen bg-neutral-600/70"
        )}
        onClick={handleMenuClick}
      ></div>

      {/* Mobile nav items - positioned outside navbar */}
      <div
        className={clsx(
          isMenuOpen ? "fixed" : "hidden",
          "z-45 top-20 left-1/2 -translate-x-1/2 bg-white rounded-sm flex flex-col items-center py-5 w-9/10 shadow-lg"
        )}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            className="px-5 py-2 hover:text-blue-500 transition-colors"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
