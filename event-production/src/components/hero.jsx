import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white  p-2 lg:p-[10px] sm:p-6 md:p-8">
      {/* Background video (no padding) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/assets/test_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Black overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-10"></div>

      {/* Wrapper with padding and border */}
      <div className="relative w-full h-full border-[1px] border-[#00FF55] rounded-xl p-8 sm:p-12 md:p-16 z-10">
        {/* Content inside the border */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <h1 className="lg:text-7xl text-6xl md:text-7xl font-bold lg:leading-tight leading-tight md:leading-normal">
            Exploring the <br /> World of{" "}
            <span className="text-[#00FF55]">EVENTS</span>
          </h1>
        </div>
      </div>

      {/* Social Icons with Black Background */}
      <div className="absolute top-0 right-0 flex space-x-2 z-20 bg-black p-2 rounded-md">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/facebook.png"
            alt="Facebook"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/twitter.png"
            alt="Twitter"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/instagram.png"
            alt="Instagram"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
        </a>
        <h2 className="text-[#00FF5580] text-center mt-2 font-inter font-semibold text-xs sm:text-sm md:text-base">
          Check out
        </h2>
      </div>

      {/* Navigation at the Bottom Left */}
      <div className="absolute bottom-1 lg:bottom-1 lg:left-20 sm:bottom-6 left-4 sm:left-8 flex space-x-5 z-20 bg-black p-2 rounded-md">
        <a
          href="/home"
          className="hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-sm sm:text-base md:text-lg"
        >
          Home
        </a>
        <a
          href="/aboutus"
          className="hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-sm sm:text-base md:text-lg"
        >
          About Us
        </a>
        <a
          href="/events"
          className="hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-sm sm:text-base md:text-lg"
        >
          Events
        </a>
        <a
          href="/contactus"
          className="hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-sm sm:text-base md:text-lg"
        >
          Contact Us
        </a>
      </div>

      {/* Event Card at Bottom Right */}
      <div className="absolute bottom-12 right-10 lg:bottom-4 lg:right-4 bg-black opacity-80 p-4 rounded-3xl shadow-lg z-20 w-64 text-center">
        <span className="bg-[#00ff55] opacity-80 text-white px-2 py-1 rounded-2xl text-xs font-bold text-center">
          Upcoming Event - DEC 5
        </span>
        <h3 className="text-lg font-bold mt-2 text-white text-left">
          Pitbull Live in Concert
        </h3>
        <p className="text-white opacity-50 text-sm text-left">
          UK Stadium, London
        </p>
        <img
          src="/assets/eventPic.png"
          alt="Pitbull Concert"
          className="w-full rounded mt-2"
        />
        <button className="mt-3  text-xs  text-white py-1 px-7  border-white border-2 font-bold bg-transparent transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
