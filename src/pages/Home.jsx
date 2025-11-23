// src/pages/Home.jsx
import logo from "../images/Logo_2026_transparent.png";
import background from "../images/Hero_2026.jpg"; 

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/70 text-center px-4">
        <img
          src={logo}
          alt="My People Fest Logo"
          className="w-48 md:w-64 mb-6"
        />
        <h1 className="text-2xl md:text-4xl font-bold tracking-wider">
          JULY 2026. MORE INFOS SOON!
        </h1>
      </div>
    </div>
  );
}
