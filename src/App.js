import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import Portefolio from "./pages/Portefolio";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";


// Navigation, routes ...

function App() {

  /*const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    const position = window.pageXOffset;
    setScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

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
