import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Educators from "./pages/Educators";
import GameTracker from "./pages/GameTracker";
import TryDemo from "./pages/TryDemo";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/educators" element={<Educators />} />
            <Route path="/game-tracker" element={<GameTracker />} />
            <Route path="/try-demo" element={<TryDemo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;