import { Request, Response } from "express";
import mailService from "../lib/mail";

export default class MailController {
  static async post(req: Request, res: Response) {
    const { from, to, subject, text, html } = req.body;

    if (!from || !to || !subject || (!text && !html)) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      await mailService.sendMail({ from, to, subject, text, html });
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to send email" });
    }
  }
}
