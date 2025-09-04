import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Media from "./pages/Media";
import News from "./pages/News";
import Tournament from "./pages/Tournament";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/news" element={<News />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
