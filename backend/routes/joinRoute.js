const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const validate = require('../middlewares/joinSchemaValidation');
const JoinSchema = require('../models/joinSchema');

const router = express.Router();
require('dotenv').config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function getUsers() {
  const users = await sql`select * from "test-clanovi"`
  console.log(users);
  return users;
}

router.get('/', async (req, res) => {
  try {
    const {data, error} = await supabase.from("test-clanovi").select("*");
    console.log('data:', data);
    res.send('<h1>BOOOOK</h1>');
  } catch (e) {
    console.error(e);
    res.json()
  }
});

router.post('/', validate(JoinSchema), async (req, res) => {
  try {
    const body = req.body;

    const {error} = await supabase.from("test-clanovi").insert({
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

    if (!error) {
      res.json({
        completed: true
      })
    } else {
      console.log('error:', error);
      res.json({
        completed: false,
        message: 'Something went wrong'
      })
    }
  } catch(error) {
    console.error(error);
    res.send({
      completed: false,
      message: 'Something went wrong'
    })
  }
});

module.exports = router;
