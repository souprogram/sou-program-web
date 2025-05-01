const express = require('express');
const SchemaValidation = require('../middlewares/schemaValidation');
const TableViewValidation = require('../middlewares/tableViewValidation');

// Controllers
const JoinCommunityController = require('../controllers/JoinCommunityController');
const SendEmailController = require('../controllers/SendEmailController');
const RoboticsEventController = require('../controllers/RoboticsEventController');
const DevOpsEventController = require('../controllers/DevOpsEventController');
const ICT2025Controller = require('../controllers/ICT2025Controller');

// Schemas
const JoinSchema = require('../models/joinSchema');
const EmailSchema = require('../models/emailSchema');
const RoboticsEventSchema = require('../models/roboticsEventSchema');
const DevOpsEventSchema = require('../models/devOpsEventSchema');
const { ICT2025SignUpSchema, ICT2025FinishSchema } = require('../models/ICT2025SignUpSchema');

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

// ICT 2025
router.post(
  '/api/ict-2025/sign-up',
  SchemaValidation.validate(ICT2025SignUpSchema),
  ICT2025Controller.signUp,
)
router.put(
  '/api/ict-2025/finish/:id',
  SchemaValidation.validate(ICT2025FinishSchema),
  ICT2025Controller.update,
);
router.get(
  '/api/ict-2025/user/:id',
  ICT2025Controller.getUser,
);
router.get(
  '/api/ict-2025/users',
  ICT2025Controller.getUsers,
);


module.exports = router;
