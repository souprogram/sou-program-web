import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

router.get('/', async (req, res) => {
  try {
    res.status(201).json({
      completed: true,
      version: process.env.npm_package_version,
      name: process.env.npm_package_name,
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

export { router as homeRouter };
