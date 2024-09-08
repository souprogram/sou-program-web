const express = require('express');
const { validate } = require('../middlewares/schemaValidation');
const { EmailSchema } = require('../models/emailSchema');
const { sendEmailToSou } = require('../utils/emailService');

const router = express.Router();

router.post('/api/send-email', validate(EmailSchema), async (req, res) => {
  try {
    const { email, name, message } = req.body;

    await sendEmailToSou(email, name, message);

    res.status(200).json({
      completed: true,
      message: 'Email sent successfully.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      completed: false,
      message: 'Something went wrong.',
      error,
    });
  }
});

module.exports = { emailRouter: router };
