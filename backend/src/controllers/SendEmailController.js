const { transporter } = require('../utils/emailService');
const env = require('../environment');
const db = require('../database');

const SendEmailController = {
  send: async (req, res) => {
    try {
      const { email, name, message } = req.body;

      const { error: insertError } = await db
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
  },
};

module.exports = SendEmailController;
