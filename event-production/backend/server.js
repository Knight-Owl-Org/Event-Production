require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000", // Local development frontend
      "https://event-production-7wd2.vercel.app" // Production frontend URL
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);
app.use(bodyParser.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, contactNumber, message } = req.body;

  // Validate phone number format (optional)
  const phoneRegex =
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,4}$/im;
  if (contactNumber && !phoneRegex.test(contactNumber)) {
    return res.status(400).json({ error: "Invalid phone number format." });
  }

  const mailOptions = {
    from: email,
    to: "tiny@knightowl.online", // Replace with the email address where you want the messages sent
    subject: `New Contact Us Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Contact Number: ${contactNumber}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error details:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email", details: error });
    }
    res.status(200).send("Message sent successfully");
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
