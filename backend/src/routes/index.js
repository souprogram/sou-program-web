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

// Members
router.get('/api/members', JoinCommunityController.list);
router.post('/api/members', validate(JoinSchema), JoinCommunityController.join);

// Send email
router.post('/api/send-email', validate(EmailSchema), SendEmailController.send);

// Robotics event
router.get('/api/events/robotics', RoboticsEventController.list);
router.post('/api/events/robotics', validate(RoboticsEventSchema), RoboticsEventController.post);

// DevOps event
router.get('/api/events/devops', DevOpsEventController.list);
router.post('/api/events/devops', validate(DevOpsEventSchema), DevOpsEventController.post);

module.exports = router;
