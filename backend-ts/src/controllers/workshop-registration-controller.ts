import { Request, Response } from "express";
import supabase from "../lib/supabase";

export default class WorkshopRegistrationController {
  static async list(req: Request, res: Response) {
    const { workshop_id } = req.query;

    let query = supabase.from("workshop_registrations").select("*");

    if (workshop_id) {
      query = query.eq("workshop_id", workshop_id as string);
    }

    const { data: registrations, error } = await query;

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (registrations) {
      return res.json({ data: registrations });
    }

    return res.status(404).json({ error: "No registrations found" });
  }

  static async store(req: Request, res: Response) {
    const { workshop_id, form_data } = req.body;

    if (!workshop_id || !form_data) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await supabase
      .from("workshop_registrations")
      .insert([{ workshop_id, form_data }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ data });
  }
}
