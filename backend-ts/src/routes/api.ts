import { Router } from "express";
// import MailController from "../http/controllers/mail-controller";
import WorkshopController from "../http/controllers/workshop-controller";
import WorkshopRegistrationController from "../http/controllers/workshop-registration-controller";
import WorkshopRegistrationMailController from "../http/controllers/workshop-registration-mail-controller";

const router = Router();

router.get("/workshops", WorkshopController.index);

router.get("/workshop-registrations", WorkshopRegistrationController.index);
router.post("/workshop-registrations", WorkshopRegistrationController.store);

router.post(
  "/workshop-registration-mail",
  WorkshopRegistrationMailController.store
);

// router.post("/mail", MailController.post);

export default router;
