import { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null); // 'imprint' or 'data'

  const closeModal = () => setOpenModal(null);

  return (
    <>
      <footer className="bg-[#221313] text-white text-sm py-2 px-4 bottom-0 w-full z-50">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4 text-xs text-center sm:flex-nowrap sm:justify-between">
          <div className="text-xs">MY PEOPLE FESTIVAL - ©2025</div>
          <div className="flex gap-4 text-xs">
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

      {/* IMPRINT MODAL */}
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

      {/* DATA PROTECTION MODAL */}
      {openModal === "data" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">DATA PROTECTION</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <div className="text-sm space-y-4 text-left text-justify">
              {/* content remains unchanged */}
              <p>In this data protection declaration we inform you about the processing of personal data when using this website.</p>
              {/* ... (rest of the text unchanged) */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
