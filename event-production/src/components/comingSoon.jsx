import React from "react";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen bg-[#121212]">
      <img
        src={`${process.env.PUBLIC_URL}/assets/comingSoonPic.png`}
        alt="Coming Soon"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
        {/* Container for left and right sections */}
        <div className="flex flex-col md:flex-row justify-between w-full px-6 md:px-10 lg:px-20">
          {/* Left section */}
          <div className="flex flex-col items-center sm:items-start sm:justify-center justify-center text-center sm:text-left md:ml-5 lg:ml-10 mb-10 lg:mb-0">
            <div className="text-center inline-block border-[1px] border-[#00FF55] px-6 py-2 md:px-8 md:py-3 mb-6 md:mb-10">
              <h2
                className="text-xl md:text-2xl font-Normal"
                style={{ fontStyle: "italic", fontWeight: 600 }}
              >
                <span className="text-[#ffff] opacity-80">Coming</span>{" "}
                <span className="text-[#00FF55]">Soon</span>
              </h2>
            </div>
            <div>
              {/* Text with custom font and weight */}
              <h2 className="text-5xl md:text-8xl lg:text-6xl mb-2 font-bold">
                <span className="font-normal" style={{ fontWeight: 800 }}>
                  The Musical{" "}
                </span>
                <br />
                <span className="font-normal" style={{ fontWeight: 800 }}>
                  by{" "}
                </span>
                <span
                  style={{
                    fontFamily: "Taprom",
                    fontWeight: 400,
                    fontSize: "48px",
                    lineHeight: "150px",
                    letterSpacing: "0px"
                  }}
                  className="md:text-8xl lg:text-7xl"
                >
                  Harry Styles
                </span>
              </h2>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col md:flex-row items-center md:items-start lg:items-end justify-center md:mr-10 lg:mr-28 mb-10 lg:mb-0">
            <table className="border-0 p-4">
              <tr>
                <td className="px-5 md:px-7 py-2">
                  <p className="text-3xl md:text-5xl lg:text-7xl mt-4 font-extrabold opacity-50">
                    7:30PM
                  </p>
                </td>

                {/* Add border to the right of this cell */}
                <td className="px-6 md:px-10 py-7 border-l-2 border-[#fff]">
                  <p className="text-3xl md:text-5xl lg:text-7xl mt-4 font-extrabold opacity-50">
                    5hr
                  </p>
                </td>
              </tr>

              <tr>
                <td className="px-5 md:px-7 py-2">
                  <p className="text-sm md:text-lg mt-4 font-bold opacity-80">
                    Start Time
                  </p>
                </td>

                {/* Add border to the right of this cell */}
                <td className="px-5 md:px-7 py-2">
                  <p className="text-sm md:text-lg mt-4 font-bold opacity-80">
                    Duration
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
