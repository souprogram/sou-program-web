const express = require('express');
const bodyParser = require('body-parser');
const joinRoute = require('./routes/joinRoute');

require('dotenv').config()

const app = express();
const PORT = 3000;

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
