const nodemailer = require("nodemailer");
require("dotenv").config();
async function sendTestEmail() {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass, // The 16-character App Password
    },
  });

  // Send a test message
  const info = await transporter.sendMail({
    from: `"Test App" `,
    to: "ouelhaziabir.92@gmail.com",
    subject: "Hello World!",
    text: "This message was sent using nodemailer.",
    html: "<p>This message was sent using <b>checkpoint nodejs</b>.</p>",
  });

  console.log("Message sent: %s", info.messageId);
}

sendTestEmail();
