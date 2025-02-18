import React, { useState } from "react";
import AnimatedPopUp from "./AnimatedPopUp";
const AboutUs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle click on the image
  const handleExpand = (index) => {
    console.log("Current expandedIndex: ", expandedIndex); // Log the current state
    setExpandedIndex((prev) => {
      const newIndex = prev === index ? null : index;
      console.log("New expandedIndex: ", newIndex); // Log the updated state
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <AnimatedPopUp>
          <h1 className="text-center text-[40px] sm:text-[48px] md:text-[56px] font-[500] text-[#5F6160] font-medium mt-24">
            Your <span className="text-[#00FF55]">trusted</span> partner for
            events
          </h1>

          {/* Main Paragraph */}
          <p className="text-lg text-[#5F6160] font-medium text-center mt-20 px-4 sm:px-8 md:px-16">
            The main impetus to the development of quality civil ceremonies in
            the Western world was the foresight of the Australian statesman,
            senator and high court judge, Lionel Murphy. In 1973 in Australia,
            the civil celebrant program entrusted appropriately selected
            individuals to provide non-church people with ceremonies of
            substance and dignity.
          </p>
        </AnimatedPopUp>
        {/* Section Header */}
        <div className="text-center inline-block border-[1px] border-[#00FF55] px-16 py-3 mt-40">
          <h2 className="text-2xl font-Normal mb-2">
            <span className="text-[#5F6160]">About</span>{" "}
            <span className="text-[#00FF55]">Us</span>
          </h2>
        </div>

        {/* Secondary Paragraph */}
        <p className="text-lg mb-4 text-[#5F6160] font-medium text-center max-w-2xl mx-auto mt-20 px-4 sm:px-8 md:px-16">
          The main impetus to the development of quality civil ceremonies in the
          Western world was the foresight of the Australian statesman,
        </p>

        {/* Responsive Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-8 w-full">
          {["Calendar", "Shows", "Tickets", "About"].map((label, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleExpand(index)} // Handle click to expand/collapse
            >
              <img
                src={`/assets/aboutUsPic${index + 1}.png`}
                alt={`AboutUsPic${index + 1}`}
                className="w-full h-auto object-cover"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 bg-[#00FF55] text-black text-center py-3 transition-all duration-300 ${
                  expandedIndex === index
                    ? "h-36 opacity-80"
                    : "h-12 opacity-80"
                } 
                // Expand on hover for larger screens
                group-hover:h-36 group-hover:opacity-80 lg:hover:h-36 lg:hover:opacity-80`}
              >
                <span className="text-lg">{label}</span>
                <p className="text-xs mt-1">
                  {label === "Calendar"
                    ? "The main impetus to the development of quality civil ceremonies"
                    : label === "Shows"
                    ? "The main impetus to the development of quality civil ceremonies"
                    : label === "Tickets"
                    ? "The main impetus to the development of quality civil ceremonies"
                    : "The main impetus to the development of quality civil ceremonies"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
