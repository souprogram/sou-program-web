import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string({ required_error: 'Moraš upisati svoje ime' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  email: z.string().email('Neispravan email'),
  message: z
    .string()
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(512, 'Moraš upisati najviše 512 znakova'),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
