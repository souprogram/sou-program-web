const express = require('express');
const { validate } = require('../middlewares/schemaValidation');

// Controllers
const JoinCommunityController = require('../controllers/JoinCommunityController');
const SendEmailController = require('../controllers/SendEmailController');
const RoboticsEventController = require('../controllers/RoboticsEventController');
const DevOpsEventController = require('../controllers/DevOpsEventController');

// Schemas
const JoinSchema = require('../models/joinSchema');
const EmailSchema = require('../models/emailSchema');
const RoboticsEventSchema = require('../models/roboticsEventSchema');
const DevOpsEventSchema = require('../models/devOpsEventSchema');

const router = express.Router();

router.post('/api/join', validate(JoinSchema), JoinCommunityController.join);
router.post('/api/send-email', validate(EmailSchema), SendEmailController.send);

router.post('/api/events/robotics', validate(RoboticsEventSchema), RoboticsEventController.post);
// router.post('/api/events/devops', validate(DevOpsEventSchema), DevOpsEventController.post);

module.exports = router;
