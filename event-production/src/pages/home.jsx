// src/pages/home.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../components/hero"; // Assuming Hero is inside components folder
import AboutUs from "../components/aboutUs";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="aboutUs">
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
