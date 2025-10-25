import { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => setOpenModal(null);

  return (
    <>
      <footer className="bg-[#ffffff] text-black text-sm py-2 px-4 bottom-0 w-full z-50">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center gap-x-6 gap-y-2 text-xs text-center sm:flex-nowrap">

          {/* ✅ Social Icons - only show on desktop */}
          <div className="hidden md:flex gap-3 text-lg">
            <a
              href="https://www.facebook.com/mypeoplefestival"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://www.instagram.com/mypeoplefestival"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>

          {/* ✅ Copyright + Legal in one line */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs">
            <span>MY PEOPLE FESTIVAL - ©2025</span>
            <button
              className="underline hover:text-white"
              onClick={() => setOpenModal("imprint")}
            >
              IMPRINT
            </button>
            <button
              className="underline hover:text-white"
              onClick={() => setOpenModal("data")}
            >
              DATA PROTECTION
            </button>
          </div>
        </div>
      </footer>

      {/* ✅ IMPRINT MODAL */}
      {openModal === "imprint" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">IMPRINT</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <div className="text-sm space-y-4 text-left text-justify">
              <p><strong>MY PEOPLE FESTIVAL</strong> is organised by a civil person, and it's not (yet) a registered business.</p>
              <p><strong>L.C. Rodrigues</strong><br />
                10249 - Berlin<br />
                Email: mypeoplebooking @ gmail . com<br />
                Web: www.mypeoplefest.net</p>
              <p><strong>Content responsibility:</strong><br />
                L.C. Rodrigues - mypeoplebooking @ gmail . com</p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ DATA PROTECTION MODAL */}
      {openModal === "data" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">DATA PROTECTION</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <div className="text-sm space-y-4 text-left text-justify">
              <p>In this data protection declaration we inform you about the processing of personal data when using this website.</p>
              <p><strong>Responsible for data processing:</strong><br />
                L. C. Rodrigues<br />
                10249 Berlin<br />
                Email: mypeoplebooking @ gmail . com</p>
              <p><strong>Data when the website is accessed:</strong></p>
              <ul className="list-disc list-inside">
                <li>IP address</li>
                <li>Date and time of the request</li>
                <li>Amount of data transferred</li>
                <li>Website from which the request originated</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
              </ul>
              <p>The legal basis for processing is our legitimate interest according to Article 6(1)(f) GDPR to enable website functionality.</p>
              <p><strong>Your rights:</strong></p>
              <ul className="list-disc list-inside">
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restrict processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right not to be subject to automated decisions (Art. 22 GDPR)</li>
                <li>Right to lodge a complaint (Art. 77 GDPR)</li>
              </ul>
              <p><em>Source: Sample data protection declaration from anwalt.de</em></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
