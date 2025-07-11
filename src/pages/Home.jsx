// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import roster from "../data/roster";

export default function Home() {
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <div className="text-black bg-[#221313] scroll-smooth">
      <div className="max-w-[950px] mx-auto px-4">

        {/* HERO */}
        <section id="hero" className="bg-[#221313] text-white text-center py-8">
          <img
            src="/images/logo.png"
            alt="My People Fest 2025"
            className="mx-auto w-full max-w-[900px] h-auto"
          />
        </section>

        {/* LINE-UP */}
        <section id="lineup" className="bg-[#221313] text-[#C49A3D] py-16">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wider">LINE-UP</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[...roster]
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 10)
              .map((band, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => setSelectedBand(band)}
                >
                  <img
                    src={band.image}
                    alt={band.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="text-center text-sm mt-2 font-semibold">{band.name}</p>
                </div>
              ))}
          </div>
        </section>

        {/* MODAL */}
        {selectedBand && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto p-4">
          <div className="bg-white max-w-[900px] w-full mx-auto p-6 rounded shadow-lg relative mt-10 mb-10">      

              {/* Header: Band name + socials */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#5e0f0f] uppercase">{selectedBand.name}</h2>
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

              {/* Media: Image + Video */}
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

              {/* Bio */}
              {selectedBand.bio && (
                <p className="text-sm text-justify text-black">{selectedBand.bio}</p>
              )}

              {/* Close button */}
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
        <section id="infos" className="bg-[#C49A3D] text-black py-16 text-center">
          <h2 className="text-3xl font-bold mb-10 tracking-wide">GENERAL INFORMATION</h2>
          <div className="space-y-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            <p><strong>LOCATION:</strong> <br></br><strong>✿ Neue Zukunft ✿</strong><br></br>Alt-Stralau, 68 - 10245 Berlin</p>
            <p><strong>OPENING TIMES:</strong> <br></br>Biergarten opens from 16:00 on.<br></br>Bands 19:00.</p>
            <p><strong>ACCESSIBILITY:</strong> <br></br>Concert rooms and toilet are wheelchair accessible.</p>
            <p><strong>CAPACITY:</strong> <br></br>Friday <strong>JULY 11TH</strong> @ Main Room - 300 Guests.<br></br>Saturday <strong>JULY 12TH</strong> @ Garage - 120 Guests.</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-[#221313] py-16 px-6 text-[#C49A3D]">
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
        <section id="contact" className="bg-[#C49A3D] py-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">CONTACT</h2>
          <p className="text-sm mb-4">mypeoplebooking (at) gmail . com</p>
          <div className="flex justify-center gap-6 text-lg" />
        </section>

      </div> {/* End of max-w wrapper */}
    </div>
  );
}
