import React from "react";
import AnimatedOnScroll from "./AnimatedOnScroll";
const eventData = [
  {
    id: 1,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description:
      "The main impetus to the development of quality civil ceremonies"
  },
  {
    id: 2,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "Experience the joy of world-class performances this season."
  },
  {
    id: 3,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "Join us for an exclusive concert with top artists."
  },
  {
    id: 4,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "Don't miss this unforgettable cultural event."
  },
  {
    id: 5,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "Witness the magic of live theater performances."
  },
  {
    id: 6,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "An inspiring event featuring renowned speakers."
  },
  {
    id: 7,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "A festival filled with music, dance, and celebration."
  },
  {
    id: 8,
    date: "05",
    month: "December",
    imageSrc: "/assets/eventPic.png",
    description: "Explore the latest trends in art and design."
  }
];

const EventCard = ({ date, month, imageSrc, description }) => {
  return (
    <AnimatedOnScroll>
      <div className="bg-black border-[1px] border-[#00FF55] rounded-2xl text-white w-full sm:w-45 md:w-70 lg:w-60 p-5 flex flex-col justify-between">
        <p className="font-Medium text-sm mb-3 text-[#fff] opacity-70">
          {description}
        </p>
        <div className="flex justify-start items-center my-3 font-Medium gap-x-7">
          <span className="text-6xl font-bold">{date}</span>
          <span className="text-sm ml-2 mt-9 font-Medium">{month}</span>
        </div>

        <img
          src={imageSrc}
          alt="Event"
          className="w-full rounded-md mb-3 h-30 object-cover"
        />
        <button className="bg-gray-600 p-6 py-1 text-white hover:bg-[#00FF55] mt-auto">
          Book Now
        </button>
      </div>
    </AnimatedOnScroll>
  );
};

const BookTickets = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8 text-center mb-20 ">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedOnScroll>
          <div className="text-center inline-block border-[1px] border-[#00FF55] px-16 py-3 mt-20 mb-20">
            <h2 className="text-2xl font-Normal mb-2 ">
              <span className="text-[#5F6160]">Book</span>{" "}
              <span className="text-[#00FF55]">Tickets</span>
            </h2>
          </div>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 justify-items-center ">
          {eventData.map((event) => (
            <EventCard
              key={event.id}
              date={event.date}
              month={event.month}
              imageSrc={event.imageSrc}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookTickets;
