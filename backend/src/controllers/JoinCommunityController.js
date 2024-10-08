const env = require('../environment');
const db = require('../database');
const { getEmailJoinSouProgram } = require('../data/emails');
const { transporter } = require('../utils/emailService');

const JoinCommunityController = {
  list: async (req, res) => {
    try {
      const { data, error } = await db
        .from(env.supabaseTableName)
        .select('*');

      if (error) throw error;

      res.status(200).json({
        data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Something went wrong.',
        error,
      });
    }
  },
  join: async (req, res) => {
    try {
      const body = req.body;

      const { error: insertError } = await db
        .from(env.supabaseTableName)
        .insert({
          full_name: body.name,
          email: body.email,
          oib: body.oib,
          dob: body.dob,
          is_unipu_student: body.isUNIPUStudent,
          study: body.study,
          role: body.role,
          discord_username: body.discordUsername,
          phone_number: body.phoneNumber,
          city: body.city,
          zip_code: body.zipCode,
        });

      if (insertError) throw insertError;

      const mailOptions = getEmailJoinSouProgram(body);

      await transporter.sendMail(mailOptions);

      res.status(201).json({
        message: 'Registration completed and email sent successfully.',
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

module.exports = JoinCommunityController;
