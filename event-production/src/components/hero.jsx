const Hero = ({ activeSection }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white p-2 lg:p-[10px] sm:p-6 md:p-8 overflow-hidden">
      {/* Background video (no padding) */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay muted loop>
        <source src={`${process.env.PUBLIC_URL}/assets/test_video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Black overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-10"></div>

      {/* Border - changed back to fixed but with viewport-relative units */}
      <div className="fixed top-[5px] left-[5px] right-[5px] bottom-[5px] sm:top-[8px] sm:left-[8px] sm:right-[8px] sm:bottom-[8px] md:top-[10px] md:left-[10px] md:right-[10px] md:bottom-[10px] lg:top-[12px] lg:left-[12px] lg:right-[12px] lg:bottom-[12px] border-[1px] border-[#00FF55] rounded-xl z-10 pointer-events-none"></div>

      {/* Wrapper with padding */}
      <div className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 z-10">
        {/* Content inside the wrapper */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Exploring the <br /> World of <span className="text-[#00FF55]">EVENTS</span>
          </h1>
        </div>
      </div>

      {/* Social Icons with Black Background */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-2 z-20 bg-black p-2 rounded-md">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/facebook.png`} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/assets/twitter.png`} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
            alt="Instagram"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </a>
        <h2 className="text-[#00FF5580] text-center mt-1 sm:mt-2 font-inter font-semibold text-xs sm:text-sm">
          Check out
        </h2>
      </div>

      {/* Navigation at the Bottom Left - changed to fixed */}
      <div className="fixed bottom-0 left-6 sm:bottom-0 sm:left-10 md:bottom-0 md:left-14 lg:bottom-0 lg:left-20 flex flex-wrap gap-2 sm:gap-4 z-20 bg-black p-2 rounded-md max-w-[90%] sm:max-w-none">
        <a
          href="/home"
          className={`hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-xs sm:text-sm md:text-base ${
            activeSection === "home" ? "border-b-2 border-[#00FF5580]" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/aboutus"
          className={`hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-xs sm:text-sm md:text-base ${
            activeSection === "aboutUs" ? "border-b-2 border-[#00FF5580]" : ""
          }`}
        >
          About Us
        </a>
        <a
          href="/events"
          className={`hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-xs sm:text-sm md:text-base ${
            activeSection === "events" ? "border-b-2 border-[#00FF5580]" : ""
          }`}
        >
          Events
        </a>
        <a
          href="/contactus"
          className={`hover:border-b-2 hover:border-[#00FF5580] transition-all duration-300 text-[#00FF5580] font-semibold pb-1 text-xs sm:text-sm md:text-base ${
            activeSection === "contactUs" ? "border-b-2 border-[#00FF5580]" : ""
          }`}
        >
          Contact Us
        </a>
      </div>

      {/* Event Card at Bottom Right */}
      <div className="absolute bottom-16 right-2 sm:bottom-16 sm:right-4 md:bottom-12 md:right-6 lg:bottom-4 lg:right-4 bg-black opacity-80 p-3 sm:p-4 rounded-3xl shadow-lg z-20 w-48 sm:w-56 md:w-64 text-center">
        <span className="bg-[#00ff55] opacity-80 text-white px-2 py-1 rounded-2xl text-xs font-bold text-center">
          Upcoming Event - DEC 5
        </span>
        <h3 className="text-base sm:text-lg font-bold mt-2 text-white text-left">Pitbull Live in Concert</h3>
        <p className="text-white opacity-50 text-xs sm:text-sm text-left">UK Stadium, London</p>
        <img
          src={`${process.env.PUBLIC_URL}/assets/eventPic.png`}
          alt="Pitbull Concert"
          className="w-full rounded mt-2"
        />
        <button className="mt-2 sm:mt-3 text-xs text-white py-1 px-4 sm:px-7 border-white border-2 font-bold bg-transparent transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Hero

