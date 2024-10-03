const { transporter } = require('../utils/emailService');
const env = require('../environment');
const db = require('../database');
const {
  getEmailRoboticsRegistationFirstFew,
  getEmailRoboticsRegistrationWaitingList,
} = require('../data/emails');

const RoboticsEventController = {
  post: async (req, res) => {
    try {
      const body = req.body;

      const { error: insertError } = await db
        .from(env.supabaseRoboticsEventTableName)
        .insert({
          full_name_student: body.fullNameStudent,
          dob_student: body.dobStudent,
          school_name: body.schoolName,
          school_grade: body.schoolGrade,
          full_name_caretaker: body.fullNameCaretaker,
          email_caretaker: body.email,
          phone_number_caretaker: body.phoneNumber,
        });

      if (insertError) throw insertError;

      const { count, error: countError } = await db
        .from(env.supabaseRoboticsEventTableName)
        .select('id', { count: 'exact' });

      if (countError || !count) throw countError;

      const mailOptions =
        count <= 30
          ? getEmailRoboticsRegistationFirstFew(body)
          : getEmailRoboticsRegistrationWaitingList(body);

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

module.exports = RoboticsEventController;
