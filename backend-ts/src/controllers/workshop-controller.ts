import { Request, Response } from "express";
import supabase from "../lib/supabase";

export default class WorkshopController {
  static async list(req: Request, res: Response) {
    const { data: workshops, error } = await supabase
      .from("workshops")
      .select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (workshops) {
      return res.json({ data: workshops });
    }

    return res.status(404).json({ error: "No workshops found" });
  }
}
