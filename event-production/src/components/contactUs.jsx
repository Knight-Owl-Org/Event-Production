import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // For loading state

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear previous error messages
    setSuccess(""); // Clear previous success messages
    try {
      await axios.post(
        "https://event-production-7wd2.vercel.app/send-email" ||
          "http://localhost:5000/send-email",
        formData
      );
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", contactNumber: "", message: "" });
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.log("Error sending message:", error); // Log the error details
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen text-black text-center p-8 mb-20 mx-4 sm:mx-8 md:mx-16 lg:mx-28 relative flex flex-col items-center justify-center">
      {/* Background Ellipses */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img
          src={`${process.env.PUBLIC_URL}/assets/contactUsPic1.png`}
          alt="Ellipse 1"
          className="absolute top-[20%] right-[60%] w-[200px] h-[200px] lg:top-[21%] lg:left-[18%] lg:w-[300px] lg:h-[300px] sm:top-[15%] sm:right-[65%] sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/contactUsPic2.png`}
          alt="Ellipse 2"
          className="absolute top-[65%] left-[60%] w-[200px] h-[200px] lg:top-[60%] lg:left-[60%] lg:w-[300px] lg:h-[300px] sm:top-[45%] sm:left-[70%] sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]"
        />
      </div>

      <div className="text-center inline-block border-[1px] border-[#00FF55] px-16 py-3 mt-20 mb-20">
        <h2 className="text-2xl font-normal mb-2">
          <span className="text-[#5F6160]">Contact</span>{" "}
          <span className="text-[#00FF55]">Us</span>
        </h2>
      </div>

      {/* Flex Container to Center the Form */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full z-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg w-full px-4 lg:w-1/2 flex-grow"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-[#5F6160] text-left mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-[1px] border-[#00FF55] text-white p-2 focus:outline-none focus:border-[#00FF554D] focus:border-3"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-[#5F6160] text-left mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-[1px] border-[#00FF55] text-white p-2 focus:outline-none focus:border-[#00FF554D] focus:border-3"
              required
            />
          </div>

          {/* Contact Number Field */}
          <div className="mb-6">
            <label className="block text-[#5F6160] text-left mb-2">
              Contact Number / Whatsapp
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full bg-transparent border-b-[1px] border-[#00FF55] text-white p-2 focus:outline-none focus:border-[#00FF554D] focus:border-3"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-[#5F6160] text-left mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-[1px] border-[#00FF55] text-white p-2 focus:outline-none focus:border-[#00FF554D] focus:border-3"
              rows="4"
              required
            />
          </div>

          {/* Display error or success messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <button
            type="submit"
            className="bg-[#00FF55] text-black font-semibold py-3 px-8 mt-10"
            disabled={loading} // Disable the button while submitting
          >
            {loading ? "Sending..." : "Contact Us"}
          </button>
        </form>
      </div>

      {/* Image positioned under the form for smaller screens, bottom-right on large screens */}
      <div className="lg:absolute lg:bottom-0 lg:right-0 lg:mb-8 lg:mr-8 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mt-10 sm:mt-20">
        <img
          src={`${process.env.PUBLIC_URL}/assets/contactUsPic3.png`}
          alt="Contact Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUs;
