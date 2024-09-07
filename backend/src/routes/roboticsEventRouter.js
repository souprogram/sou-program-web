const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const { validate } = require('../middlewares/schemaValidation');
const { RoboticsEventSchema } = require('../models/roboticsEventSchema');

const router = express.Router();
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? '';
const supabaseRoboticsEventTableName = process.env.SUPABASE_ROBOTICS_EVENT_TABLE_NAME ?? '';

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
);

router.post('/', validate(RoboticsEventSchema), async (req, res) => {
  try {
    const body = req.body;

    const supabaseRequest = await supabase
      .from(supabaseRoboticsEventTableName)
      .insert({
        full_name_student: body.fullNameStudent,
        dob_student: body.dobStudent,
        school_name: body.schoolName,
        school_grade: body.schoolGrade,
        full_name_caretaker: body.fullNameCaretaker,
        email_caretaker: body.email,
        phone_number_caretaker: body.phoneNumber,
      });

    if (supabaseRequest.error) throw supabaseRequest.error;

    res.status(201).json({
      completed: true,
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

module.exports = { roboticsEventRouter: router };
