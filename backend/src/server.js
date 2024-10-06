const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { rateLimit } = require('express-rate-limit');
const helmet = require('helmet');

const env = require('./environment');

const routes = require('./routes');

const app = express();

app.use(
  cors({
    origin:
      env.nodeEnv === 'development'
        ? ['http://localhost:5173', env.frontendUrl]
        : env.frontendUrl,
    credentials: false,
  }),
);

app.use(helmet());

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
      message: 'Welcome to Sou program backend',
      version: process.versions.node,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong.',
      error,
    });
  }
});

app.use('', routes);

const port = env.port || 3000;

app.listen(port, () => {
  console.log(`Server started running on port ${port}.`);
});
