import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import LineUp from "./pages/LineUp";
import BandPage from "./pages/BandPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/line-up" element={<LineUp />} />
            <Route path="/roster/:bandSlug" element={<BandPage />} />
            <Route
              path="*"
              element={
                <div className="text-center text-black p-20 text-2xl">
                  404 – Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
