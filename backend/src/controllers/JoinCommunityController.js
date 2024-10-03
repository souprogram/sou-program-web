const env = require('../environment');
const db = require('../database');

const JoinCommunityController = {
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
