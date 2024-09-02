import { z } from 'zod';
import { isValidPhoneNumber } from '../utils/isValidPhoneNumber';

export const RoboticsEventSchema = z.object({
  name: z
    .string({ required_error: 'Moraš upisati svoje ime' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  surname: z
    .string({ required_error: 'Moraš upisati svoje prezime' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  age: z.coerce.number({ required_error: 'Moraš upisati godinu' }),
  school: z.string().min(2, 'Moraš upisati najmanje 2 znaka'),
  email: z.string().email('Neispravan email'),
  phoneNumber: z
    .string({ required_error: 'Moraš upisati svoj broj mobitela' })
    .refine(isValidPhoneNumber, 'Neispravan broj mobitela'),
  zipCode: z.string().min(5, 'Moraš upisati najmanje 5 znaka'),
  city: z.string().min(2, 'Moraš upisati najmanje 2 znaka'),
});

export type RoboticsEventSchemaType = z.infer<typeof RoboticsEventSchema>;
