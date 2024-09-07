const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const { validate } = require('../middlewares/schemaValidation');
const { JoinSchema } = require('../models/joinSchema');

const router = express.Router();
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? '';
const supabaseTableName = process.env.SUPABASE_TABLE_NAME ?? '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

router.post('/', validate(JoinSchema), async (req, res) => {
  try {
    const body = req.body;

    const { error } = await supabase.from(supabaseTableName).insert({
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

module.exports = { joinRouter: router };
