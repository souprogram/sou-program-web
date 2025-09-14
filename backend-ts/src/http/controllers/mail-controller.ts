import { Request, Response } from "express";
import mailService from "../../lib/mail";
import { SendMailRequestSchema } from "../requests/mail-request";

export default class MailController {
  static async post(req: Request, res: Response) {
    const validation = SendMailRequestSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const mailOptions = {
      from: validation.data.from || process.env.EMAIL_USER,
      to: validation.data.to,
      subject: validation.data.subject,
      text: validation.data.text,
      html: validation.data.html,
    };

    try {
      await mailService.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
