import { z } from 'zod';
import { isValidPhoneNumber } from '../utils/isValidPhoneNumber';
import { SchoolGrade } from '../enums/SchoolGrade';

export const RoboticsEventSchema = z.object({
  fullNameStudent: z
    .string({ required_error: 'Moraš upisati svoje ime i prezime polaznika' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  dobStudent: z.string().date('Neispravan datum rođenja'),
  schoolName: z.string().min(2, 'Moraš upisati najmanje 2 znaka'),
  schoolGrade: z.nativeEnum(SchoolGrade, {
    required_error: 'Moraš odabrati razred',
  }),
  fullNameCaretaker: z
    .string({ required_error: 'Moraš upisati svoje ime i prezime skrbnika' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  email: z.string().email('Neispravan email'),
  phoneNumber: z
    .string({ required_error: 'Moraš upisati svoj broj mobitela' })
    .refine(isValidPhoneNumber, 'Neispravan broj mobitela'),
});

export type RoboticsEventSchemaType = z.infer<typeof RoboticsEventSchema>;
