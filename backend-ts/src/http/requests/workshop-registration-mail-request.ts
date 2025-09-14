import z from "zod";

export const WorkshopRegistrationMailPostRequestSchema = z.object({
  workshop_registration_id: z.uuid(),
  email_to: z.email(),
});

export type WorkshopRegistrationMailPostRequest = z.infer<
  typeof WorkshopRegistrationMailPostRequestSchema
>;
