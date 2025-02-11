import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white p-[10px]">
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

      {/* Wrapper with padding and border */}
      <div className="relative w-full h-full border-2 border-[#00FF55] rounded-xl p-[50px] z-10">
        {/* Content inside the border */}
        <div className="text-center mt-[3rem]">
          <h1 className="text-7xl font-bold leading-[6rem]">
            Exploring the <br /> World of{" "}
            <span className="text-[#00FF55]">EVENTS</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
