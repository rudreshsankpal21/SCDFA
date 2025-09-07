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
    </>
  );
};

export default Home;
