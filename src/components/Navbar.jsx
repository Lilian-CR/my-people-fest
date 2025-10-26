// src/components/Navbar.jsx
import { useState } from "react";
import logo2026 from "../images/Logo_2026-transparent.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "LINE-UP", href: "#lineup" },
    { label: "GENERAL INFORMATION", href: "#infos" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="bg-black sticky top-0 z-50 w-full">
      <nav className="h-14 flex items-center justify-between px-6">

        {/* Left: Logo + Text */}
        <div className="flex items-center gap-3">
          <img
            src={logo2026}
            alt="My People Fest Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="hidden md:inline-block text-[#f8bc69] font-morganite text-[2rem] tracking-widest uppercase not-italic leading-none">
            July 2026
          </span>
        </div>

        {/* Desktop Nav – Right Aligned */}
        <div className="hidden md:flex gap-10 font-morganite text-[2.5rem] tracking-wider uppercase not-italic leading-none text-[#f8bc69]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:opacity-80 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger – Mobile Only */}
        <button
          className="md:hidden text-3xl text-[#f8bc69] ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-1/2 w-1/4 bg-mpf-blue backdrop-blur-sm p-6 flex flex-col gap-6 text-center font-morganite text-2xl uppercase text-black rounded-bl-lg items-end z-50 shadow-xl not-italic">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}





