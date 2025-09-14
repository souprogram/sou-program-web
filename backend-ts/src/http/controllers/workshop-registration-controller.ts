import { Request, Response } from "express";
import supabase from "../../lib/supabase";
import {
  WorkshopRegistrationIndexRequestSchema,
  WorkshopRegistrationPostRequestSchema,
} from "../requests/workshop-registration-request";

export default class WorkshopRegistrationController {
  static async index(req: Request, res: Response) {
    const validation = WorkshopRegistrationIndexRequestSchema.safeParse(
      req.query
    );

    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const { workshop_id } = validation.data;

    let query = supabase.from("workshop_registrations").select("*");

    if (workshop_id) {
      query = query.eq("workshop_id", workshop_id);
    }

    const { data, error } = await query;

    if (error) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.json({ data });
  }

  static async store(req: Request, res: Response) {
    const validation = WorkshopRegistrationPostRequestSchema.safeParse(
      req.body
    );

    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const { workshop_id, form_data } = validation.data;

    const { data, error } = await supabase
      .from("workshop_registrations")
      .insert([{ workshop_id, form_data }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(201).json({ data });
  }
}
