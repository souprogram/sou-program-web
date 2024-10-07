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

export const memberListSearchSchema = z.object({
  table_view_access_key: z.string().nullish(),
});

export const roboticsMemberSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime({ offset: true }),
  full_name_student: z.string().min(2).max(50),
  dob_student: z.string().date(),
  school_name: z.string().min(2),
  school_grade: z.nativeEnum(SchoolGrade),
  full_name_caretaker: z.string().min(2).max(50),
  email_caretaker: z.string().email(),
  phone_number_caretaker: z.string().refine(isValidPhoneNumber),
});

export const roboticsMemberListSchema = z.object({
  data: z.array(roboticsMemberSchema),
});

export type RoboticsMemberList = z.infer<typeof roboticsMemberListSchema>;
