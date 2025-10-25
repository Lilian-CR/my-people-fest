// src/pages/LineUp.jsx
import roster from "../data/roster";
import BandCard from "../components/BandCard";

export default function LineUp() {
  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-12 bg-[#5e0f0f]">
        <h1 className="text-4xl font-bold tracking-wider">MPF 2026 LINE-UP</h1>
        <p className="mt-2 text-sm">Coming soon! • Berlin</p>
      </header>

      {/* Line-Up Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {roster.map((band, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <PersonCard {...band} />
            <p className="text-sm mt-2 text-gray-300 italic">Bio coming soon...</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-[#101010] text-gray-400 text-xs text-center py-4">
        MY PEOPLE FESTIVAL – ©2025
      </footer>
    </div>
  );
}
