import React from "react";
import { Routes, Route } from "react-router-dom";

import Painel from './pages/Painel'
import Gallery from './pages/Gallery';
import Home from "./pages/Home";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="painel" element={<Painel />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}