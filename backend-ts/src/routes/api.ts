import { Router } from "express";
import WorkshopController from "../http/controllers/workshop-controller";
import WorkshopRegistrationController from "../http/controllers/workshop-registration-controller";
import MailController from "../http/controllers/mail-controller";

const router = Router();

router.get("/workshops", WorkshopController.list);

router.get("/workshop-registrations", WorkshopRegistrationController.list);
router.post("/workshop-registrations", WorkshopRegistrationController.store);

router.post("/mail", MailController.post);

export default router;
