import React from "react";
import "./Home.css";
import Swiper from "../components/Swiper";
const Home = () => {
  return (
    <>
      <div className="hero-upper">
        <h1>SOLAPUR CITY & DISTRICT FOOTBALL ASSOCIATION</h1>
      </div>
      <div className="hero-section">
        <Swiper />
      </div>
      <div className="section-2">
        <h1>Our Initiatives</h1>
        <div className="info">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
