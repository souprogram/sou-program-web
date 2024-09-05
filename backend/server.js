import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import { emailRouter } from './routes/emailRouter.js';
import { joinRouter } from './routes/joinRouter.js';
import { roboticsEventRouter } from './routes/roboticsEventRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// TO-DO: Enable CORS for same-origin requests
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://souprogram.hr:443',
    ],
    credentials: false,
  }),
);

app.use(helmet());

// limiting number of requests for each IP address
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    limit: 10, // Limit each IP to 10 requests per `window` (here, per 60 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  }),
);

app.use(bodyParser.json());

app.get('/api', async (req, res) => {
  try {
    res.status(200).json({
      completed: true,
      version: process.versions.node,
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

app.use('/api/join', joinRouter);
app.use('/api/email', emailRouter);
app.use('/api/event/robotics', roboticsEventRouter);

(function start() {
  try {
    app.listen(PORT, () => {
      console.log('Server started running on port 3000.');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
