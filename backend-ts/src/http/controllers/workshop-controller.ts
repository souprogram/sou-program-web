import { Request, Response } from "express";
import supabase from "../../lib/supabase";

export default class WorkshopController {
  static async list(req: Request, res: Response) {
    const { data, error } = await supabase.from("workshops").select("*");

    if (error) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.json({ data });
  }
}
