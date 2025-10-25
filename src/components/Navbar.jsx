// src/components/Navbar.jsx
import { useState } from "react";

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
    <header className="bg-black text-white sticky top-0 z-50 w-full">
      <nav className="h-20 flex items-center justify-end px-6">

        {/* Desktop Nav Links – RIGHT ALIGNED, CENTERED VERTICALLY */}
        <div className="hidden md:flex gap-10 font-morganite text-[2.5rem] tracking-widest uppercase not-italic">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:opacity-80 transition"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Hamburger - Mobile Only */}
        <button
          className="md:hidden text-3xl ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-1/2 w-3/5 bg-mpf-beige backdrop-blur-sm p-6 flex flex-col gap-6 text-right font-morganite text-2xl not-italic uppercase text-black rounded-bl-lg items-end z-50 shadow-xl">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-black transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
