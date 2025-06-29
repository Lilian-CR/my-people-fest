// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "LINE-UP", href: "#lineup" },
    { label: "GENERAL INFORMATION", href: "#infos" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
    {
      label: "TICKETS",
      href: "https://www.eventbrite.com/e/my-people-fest-2025-july-11th-12th-tickets-1417559531719",
      external: true,
    },
  ];

  return (
    <header className="bg-mpf-gold text-mpf-black sticky top-0 z-50">
      <nav className="relative max-w-[950px] mx-auto px-4 flex items-center justify-between h-14">

        {/* ✅ Desktop Nav - centered */}
        <div className="hidden md:flex gap-24 font-bold text-sm uppercase absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:opacity-80 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* ✅ Hamburger (right) */}
        <button
          className="md:hidden text-2xl text-black ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* ✅ Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-1/2 w-2/3 bg-mpf-gold backdrop-blur-sm p-6 flex flex-col gap-6 text-right font-bold text-sm uppercase text-black rounded-bl-lg items-end z-50 shadow-xl">
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
                className="hover:text-mpf-black transition"
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
