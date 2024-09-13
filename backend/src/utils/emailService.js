const nodemailer = require('nodemailer');
const env = require('../environment');

const transporter = nodemailer.createTransport({
  host: env.emailHost,
  port: env.emailPort,
  secure: true,
  auth: {
    user: env.emailUser,
    pass: env.emailPass,
  },
});

module.exports = { transporter };
