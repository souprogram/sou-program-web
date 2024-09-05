import express from 'express';
import dotenv from 'dotenv';
import { validate } from '../middlewares/schemaValidation.js';
import { EmailSchema } from '../models/emailSchema.js';

const router = express.Router();
dotenv.config();

router.post('/', validate(EmailSchema), async (req, res) => {
  try {
    const body = req.body;

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

export { router as emailRouter };
