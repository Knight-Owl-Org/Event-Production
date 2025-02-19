// src/pages/home.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../components/hero"; // Assuming Hero is inside components folder
import AboutUs from "../components/aboutUs";
import BookTickets from "../components/bookTickets";
import ComingSoon from "../components/comingSoon";
import Events from "../components/events";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="aboutUs">
        <AboutUs />
      </div>
      <div className="bookTickets">
        <BookTickets />
      </div>
      <div className="comingSoon">
        <ComingSoon />
      </div>
      <div className="events">
        <Events />
      </div>
      <div className="contactUs">
        <ContactUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
