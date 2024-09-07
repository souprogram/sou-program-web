const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'mail.souprogram.hr',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmailToSou(email, name, message) {
  const text = `
      Bok, zovem se ${name} i šaljem Vam ovu poruku sa web stranice.

      ${message}
    `;

  return await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New email from ${name}`,
    text,
  });
}

module.exports = { transporter, sendEmailToSou };
