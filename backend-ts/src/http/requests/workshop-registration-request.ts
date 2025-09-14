import z from "zod";

export const WorkshopRegistrationIndexRequestSchema = z.object({
  workshop_id: z.uuid().optional(),
});

export const WorkshopRegistrationPostRequestSchema = z.object({
  workshop_id: z.uuid(),
  form_data: z.json().refine(
    (data) => {
      return (
        typeof data === "object" &&
        data !== null &&
        !Array.isArray(data) &&
        Object.keys(data).length > 0
      );
    },
    {
      message: "form_data must be a non-empty JSON object",
    }
  ),
});

export type WorkshopRegistrationPostRequest = z.infer<
  typeof WorkshopRegistrationPostRequestSchema
>;
