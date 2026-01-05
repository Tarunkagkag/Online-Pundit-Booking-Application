
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  if (!to) {
    console.error("❌ No recipient email provided");
    return;
  }

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "en24ca5030171@medicaps.ac.in", // your email
        pass: "uzmujitiatdbghao", //your app password           
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      from: `"Pundit App" <en24ca5030171@medicaps.ac.in>`,// sender address
      to,       // use the 'to' parameter
      subject,  // use the 'subject' parameter
      text,     // use the 'text' parameter
    });

    console.log("📩 Email sent:", info.response);
  } catch (err) {
    console.error("❌ Email error:", err.message);
  }
};

module.exports = sendEmail;
