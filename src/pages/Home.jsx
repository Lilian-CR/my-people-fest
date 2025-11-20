// src/pages/Home.jsx
import { useState } from "react";
import roster from "../data/roster";
import heroImage from "../images/Hero_2026.jpg";

export default function Home() {
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <div className="bg-[#000000] text-white scroll-smooth">

      {/* HERO (FULL-WIDTH) */}
      <section id="hero" className="w-full">
        <img
          src={heroImage}
          alt="MY PEOPLE FEST 2026"
          className="w-full h-auto block"
        />
      </section>
    
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
    
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full bg-[#000000] py-10 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">CONTACT</h2>
        <p className="text-sm mb-4">mypeoplebooking (at) gmail . com</p>
        <div className="flex justify-center gap-6 text-lg" />
      </section>

    </div>
  );
}
