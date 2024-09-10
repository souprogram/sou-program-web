const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const rateLimit = require('express-rate-limit').rateLimit;
const helmet = require('helmet');
const emailRouter = require('./routes/emailRouter').emailRouter;
const joinRouter = require('./routes/joinRouter').joinRouter;
const roboticsEventRouter =
  require('./routes/roboticsEventRouter').roboticsEventRouter;

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// TO-DO: Enable CORS for same-origin requests
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'development'
        ? ['http://localhost:5173', process.env.FRONTEND_URL]
        : process.env.FRONTEND_URL,
    credentials: false,
  }),
);

app.use(helmet());

// limiting number of requests for each IP address
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  }),
);

app.use(bodyParser.json());

app.get('/', async (req, res) => {
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

app.use('', emailRouter);
app.use('/api/join', joinRouter);
app.use('/api/email', emailRouter);
app.use('/api/event/robotics', roboticsEventRouter);

app.listen(PORT, () => {
  console.log('Server started running on port 3000.');
});
