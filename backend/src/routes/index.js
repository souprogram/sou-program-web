const express = require('express');
const { validate } = require('../middlewares/schemaValidation');

const JoinCommunityController = require('../controllers/JoinCommunityController');
const SendEmailController = require('../controllers/SendEmailController');
const RoboticsEventController = require('../controllers/RoboticsEventController');

const JoinSchema = require('../models/joinSchema');
const EmailSchema = require('../models/emailSchema');
const RoboticsEventSchema = require('../models/roboticsEventSchema');

const router = express.Router();

router.post('/api/join', validate(JoinSchema), JoinCommunityController.join);
router.post('/api/send-email', validate(EmailSchema), SendEmailController.send);

router.post('/api/events/robotics', validate(RoboticsEventSchema), RoboticsEventController.post);

module.exports = router;
