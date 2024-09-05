import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { validate } from '../middlewares/schemaValidation.js';
import { RoboticsEventSchema } from '../models/roboticsEventSchema.js';

const router = express.Router();
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);

router.post('/', validate(RoboticsEventSchema), async (req, res) => {
  try {
    const body = req.body;

    const supabaseRequest = await supabase
      .from(process.env.SUPABASE_ROBOTICS_EVENT_TABLE_NAME)
      .insert({
        full_name_student: body.fullNameStudent,
        dob_student: body.dobStudent,
        school_name: body.schoolName,
        school_grade: body.schoolGrade,
        full_name_caretaker: body.fullNameCaretaker,
        email_caretaker: body.email,
        phone_number_caretaker: body.phoneNumber,
      });

    if (supabaseRequest.error) throw supabaseRequest;

    res.status(201).json({
      completed: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      completed: false,
      message: 'Something went wrong.',
      error: error.error,
    });
  }
});

export { router as roboticsEventRouter };
