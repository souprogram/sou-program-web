const express = require('express');
const SchemaValidation = require('../middlewares/schemaValidation');
const TableViewValidation = require('../middlewares/tableViewValidation');

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
router.get(
  '/api/members',
  TableViewValidation.validate(),
  JoinCommunityController.list,
);
router.post(
  '/api/members',
  SchemaValidation.validate(JoinSchema),
  JoinCommunityController.join,
);

// Send email
router.post(
  '/api/send-email',
  SchemaValidation.validate(EmailSchema),
  SendEmailController.send,
);

// Robotics event
router.get(
  '/api/events/robotics',
  TableViewValidation.validate(),
  RoboticsEventController.list,
);
router.post(
  '/api/events/robotics',
  SchemaValidation.validate(RoboticsEventSchema),
  RoboticsEventController.post,
);

// DevOps event
router.get(
  '/api/events/devops',
  TableViewValidation.validate(),
  DevOpsEventController.list,
);
router.post(
  '/api/events/devops',
  SchemaValidation.validate(DevOpsEventSchema),
  DevOpsEventController.post,
);

module.exports = router;
