// src/pages/home.jsx
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../components/hero"; // Assuming Hero is inside components folder
import AboutUs from "../components/aboutUs";
import BookTickets from "../components/bookTickets";
import ComingSoon from "../components/comingSoon";
import Events from "../components/events";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[class^='section-']");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.className.split(" ")[0].split("-")[1];
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="section-home">
        <Hero activeSection={activeSection} />
      </div>
      <div className="section-aboutUs">
        <AboutUs />
      </div>
      <div className="section-events">
        <BookTickets />
      </div>
      <div className="section-events">
        <ComingSoon />
      </div>
      <div className="section-events">
        <Events />
      </div>
      <div className="section-contactUs">
        <ContactUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
