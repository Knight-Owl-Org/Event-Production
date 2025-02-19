import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const EventBlock = ({ imgSrc, description, reverse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-32 md:gap-32 items-center">
      {/* Event Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Ensures animation happens only once
        transition={{ duration: 1 }}
        className={`relative ${reverse ? "order-2" : "order-1"}`}
      >
        <img src={imgSrc} alt="Event" className="w-full h-auto object-cover" />
      </motion.div>

      {/* Event Description */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Ensures animation happens only once
        transition={{ duration: 0.8 }}
        className={`text-[#fff] font-medium opacity-70 leading-7 text-left lg:max-w-[400px] ${
          reverse ? "order-1" : "order-2"
        }`}
      >
        <p>{description}</p>
        <a href="#" className="mt-3 flex items-center gap-4">
          View Gallery
          <img
            src={`${process.env.PUBLIC_URL}/assets/arrow.png`}
            alt="Arrow Icon"
            className="w-5 h-5"
          />
        </a>
      </motion.div>
    </div>
  );
};

const Events = () => {
  const eventsData = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/eventPic1.png`,
      description:
        "The main impetus to the development of quality civil ceremonies. The main impetus to the development of quality civil ceremonies.",
      reverse: false
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/eventPic2.png`,
      description:
        "The main impetus to the development of quality civil ceremonies. The main impetus to the development of quality civil ceremonies.",
      reverse: true
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/eventPic3.png`,
      description:
        "The main impetus to the development of quality civil ceremonies. The main impetus to the development of quality civil ceremonies.",
      reverse: false
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/eventPic4.png`,
      description:
        "The main impetus to the development of quality civil ceremonies. The main impetus to the development of quality civil ceremonies.",
      reverse: true
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Show 4 images in the carousel
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3 // Show 3 images on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 // Show 2 images on smaller screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1 // Show 1 image on very small screens
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white text-center p-8 mb-20 mx-4 md:mx-10 lg:mx-28">
      {/* Section Header */}
      <div className="text-center inline-block border-[1px] border-[#00FF55] px-8 py-3 mt-20 mb-20">
        <h2 className="text-xl md:text-2xl font-normal mb-2">
          <span className="text-[#5F6160]">Previous</span>{" "}
          <span className="text-[#00FF55]">Events</span>
        </h2>
      </div>

      {/* Event Blocks with space between each block */}
      <div className="space-y-40 md:space-y-40 lg:space-y-60">
        {eventsData.map((event, index) => (
          <EventBlock
            key={index}
            imgSrc={event.imgSrc}
            description={event.description}
            reverse={event.reverse}
          />
        ))}
      </div>

      {/* Carousel at the bottom */}
      <div className="mt-32 md:mt-28 lg:mt-60 overflow-hidden max-w-screen-xl mx-auto">
        <Slider {...sliderSettings}>
          {eventsData.concat(eventsData).map((event, index) => (
            <div key={index} className="!m-0 !p-0 w-full">
              <img
                src={event.imgSrc}
                alt={`Event ${index + 1}`}
                className="w-full h-[150px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
