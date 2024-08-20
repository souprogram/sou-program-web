import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string({ required_error: 'You must enter your name' })
    .min(2, 'You must enter at least 2 characters')
    .max(50, 'You must enter at most 50 characters'),
  email: z.string().email('Invalid email'),
  message: z
    .string()
    .min(2, 'You must enter at least 2 characters')
    .max(512, 'You must enter at most 512 characters'),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
