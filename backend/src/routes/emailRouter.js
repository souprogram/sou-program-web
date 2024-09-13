const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const env = require('../environment');
const { validate } = require('../middlewares/schemaValidation');
const { EmailSchema } = require('../models/emailSchema');
const { transporter } = require('../utils/emailService');

const router = express.Router();

const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey);

router.post('/api/send-email', validate(EmailSchema), async (req, res) => {
  try {
    const { email, name, message } = req.body;

    const { error: insertError } = await supabase
      .from(env.supabaseEmailsTableName)
      .insert({
        email: email,
        name: name,
        message: message,
      });

    if (insertError) throw insertError;

    const text = `
      Bok, zovem se ${name} i šaljem Vam ovu poruku sa web stranice.

      ${message}
    `;

    const mailOptions = {
      from: String(email),
      to: env.emailUser ?? 'info@souprogram.hr',
      subject: `New email from ${name}`,
      text,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'Email stored and sent successfully.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong.',
      error,
    });
  }
});

module.exports = { emailRouter: router };
