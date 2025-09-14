import z from "zod";

export const SendMailRequestSchema = z
  .object({
    from: z.email().optional(),
    to: z.email(),
    subject: z.string().min(1),
    text: z.string().optional(),
    html: z.string().optional(),
  })
  .refine((data) => data.text || data.html, {
    message: "Either text or html must be provided",
  });

export type SendMailRequest = z.infer<typeof SendMailRequestSchema>;
