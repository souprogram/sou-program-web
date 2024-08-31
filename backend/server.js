import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet';
import dotenv from 'dotenv';
import { joinRoute } from './routes/joinRoute.js';

dotenv.config()

const app = express();
const PORT = 3000;

// TO-DO: Enable CORS for same-origin requests
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:3000'],
//   credentials: false
// }));

// web vulnerabilities protection
app.use(helmet())

// limiting number of requests for each IP address
const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 60 minutes
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 60 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});
app.use(limiter);

app.use(bodyParser.json());
app.use('/join', joinRoute);

(function start() {
  try {
    app.listen(PORT, () => void console.log('Server started running on port 3000.'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
