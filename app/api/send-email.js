// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "your-email@gmail.com",
        subject: "New Contact Form Submission",
        text: message,
      });

      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while sending the email");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
