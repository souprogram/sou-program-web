import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { validate } from '../middlewares/schemaValidation.js';
import { JoinSchema } from '../models/joinSchema.js';

const router = express.Router();
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);

router.post('/', validate(JoinSchema), async (req, res) => {
  try {
    const body = req.body;

    const { error } = await supabase
      .from(process.env.SUPABASE_TABLE_NAME)
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

    if (error) throw error;

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

export { router as joinRouter };
