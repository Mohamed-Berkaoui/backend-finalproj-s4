const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "berrmedd@gmail.com",
    pass: "kolg lgzw tgxl iuyc",
  },
});

// Wrap in an async IIFE so we can use await.
const sendMail=async(email,userId, hash) => {
  const info = await transporter.sendMail({
    from: "ecommerce app",
    to: email,
    subject: "verification",
    text: "Hello world?", // plain‑text body
    html: `<b>Please verify your account using this link: http://localhost:5173/verify/${hash}/${userId}</b>`, // HTML body
  });

  console.log("Message sent:", info.messageId);
}

module.exports=sendMail;