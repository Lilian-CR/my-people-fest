// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import roster from "../data/roster";
import heroImage from "../images/Hero_2026.jpg";

export default function Home() {
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <div className="bg-[#000000] text-white scroll-smooth">

      {/* HERO */}
      <section id="hero" className="bg-[#1b2128] text-white text-center py-24 px-4">
        <img
          src={heroImage}
          alt="MY PEOPLE FEST 2026"
          className="w-full h-auto"
        />
      </section>

      {/* LINE-UP */}
      <section id="lineup_26" className="bg-[#000000] text-[#ffffff] py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wider">
          LINE-UP IN DECEMBER 2026
        </h2>
      </section>

      {/* MODAL */}
      {selectedBand && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto p-4">
          <div className="bg-white max-w-[900px] w-full mx-auto p-6 rounded shadow-lg relative mt-10 mb-10">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-[#5e0f0f] uppercase">
                {selectedBand.name}
              </h2>
              <div className="flex gap-3 text-xl text-[#5e0f0f]">
                {selectedBand.socials?.instagram && (
                  <a href={selectedBand.socials.instagram} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                )}
                {selectedBand.socials?.facebook && (
                  <a href={selectedBand.socials.facebook} target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook" />
                  </a>
                )}
                {selectedBand.socials?.spotify && (
                  <a href={selectedBand.socials.spotify} target="_blank" rel="noreferrer">
                    <i className="fab fa-spotify" />
                  </a>
                )}
                {selectedBand.socials?.bandcamp && (
                  <a href={selectedBand.socials.bandcamp} target="_blank" rel="noreferrer">
                    <i className="fab fa-bandcamp" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img
                src={selectedBand.image}
                alt={selectedBand.name}
                className="w-full h-64 object-cover rounded"
              />
              {selectedBand.video && (
                <iframe
                  src={selectedBand.video}
                  title={`${selectedBand.name} video`}
                  allowFullScreen
                  className="w-full h-64 rounded"
                />
              )}
            </div>

            {selectedBand.bio && (
              <p className="text-sm text-justify text-black">{selectedBand.bio}</p>
            )}

            <button
              onClick={() => setSelectedBand(null)}
              className="absolute -top-3 right-4 text-[#5e0f0f] text-2xl font-bold hover:scale-110 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* GENERAL INFOS */}
      <section id="infos" className="bg-[#1b2128] text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-10 tracking-wide">GENERAL INFORMATION / LOANDING</h2>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#000000] py-16 px-4 text-[#ffffff]">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide text-center">ABOUT</h2>
        <div className="max-w-3xl mx-auto leading-relaxed text-sm md:text-base text-justify">
          <p className="mb-4 font-medium">
            MY PEOPLE FEST is a HARDCORE/PUNK festival dedicated to bringing greater diversity
            to the hardcore, punk, alternative, and metal scenes in Berlin and across Europe.
            <br /><br />
            For too long, political HARDCORE/PUNK festivals have displayed banners like
            “GOOD NIGHT WHITE PRIDE” and “AGAINST RACISM, SEXISM…” — yet 90% of their lineups
            remain overwhelmingly white, cis, and male. MY PEOPLE FEST challenges that status quo.
          </p>
          <div className="text-center font-bold my-6 space-y-2">
            <p>DO-IT-YOURSELF!! * BY THE PEOPLE, FOR THE PEOPLE! * Est 2022</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#1b2128] py-10 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">CONTACT</h2>
        <p className="text-sm mb-4">mypeoplebooking (at) gmail . com</p>
        <div className="flex justify-center gap-6 text-lg" />
      </section>

    </div>
  );
}


