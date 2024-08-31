import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { validate } from '../middlewares/joinSchemaValidation.js';
import { JoinSchema } from '../models/joinSchema.js';

const router = express.Router();
dotenv.config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

router.post('/', validate(JoinSchema), async (req, res) => {
  try {
    const body = req.body;

    const {error} = await supabase.from(process.env.SUPABASE_TABLE_NAME).insert({
      name: body.name,
      email: body.email,
      oib: body.oib,
      dob: body.dob,
      is_student: body.isStudent,
      role: body.role,
      discord_username: body.discordUsername,
      phone_number: body.phoneNumber,
      place_of_residence: body.placeOfResidence,
      terms_accepted: body.terms
    })

    if (error) throw new Error('Something error');
    res.status(201).json({
      completed: true
    })
  } catch(error) {
    console.error(error);
    res.status(500).send({
      completed: false,
      message: 'Something went wrong.'
    })
  }
});

export { router as joinRoute};
