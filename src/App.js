import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./pages/Cv";
import Home from "./pages/Home";

// Navigation, routes ...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path='*' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
