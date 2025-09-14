import { Request, Response } from "express";
import supabase from "../../lib/supabase";
import sendRobotics3DModelingMail from "../../utils/workshops/robotics-3d-modeling/send-mail";
import { WorkshopRegistrationMailPostRequestSchema } from "../requests/workshop-registration-mail-request";

export default class WorkshopRegistrationMailController {
  static async store(req: Request, res: Response) {
    const validation = WorkshopRegistrationMailPostRequestSchema.safeParse(
      req.body
    );

    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const { workshop_registration_id, email_to } = validation.data;

    const { data: workshopRegistration, error } = await supabase
      .from("workshop_registrations")
      .select("*, workshop:workshops(*)")
      .eq("id", workshop_registration_id)
      .single();

    if (error) {
      return res.status(500).json({ error: "Internal server error" });
    }

    try {
      type sendMailFnMap = {
        [key: string]:
          | (<T>(data: T, email_to: string) => Promise<void>)
          | undefined;
      };

      const sendMailFn: sendMailFnMap = {
        "robotics-3d-modeling": () =>
          sendRobotics3DModelingMail(workshopRegistration, email_to),
      };

      const fn = sendMailFn[workshopRegistration.workshop.name];
      if (!fn) {
        throw new Error("No email function defined for this workshop");
      }

      await fn(workshopRegistration, email_to);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json({ message: "Email sent successfully" });
  }
}
