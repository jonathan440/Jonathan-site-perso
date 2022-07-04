import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import Portefolio from "./pages/Portefolio";
import Contact from "./pages/Contact";


// Navigation, routes ...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portefolio" element={<Portefolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
