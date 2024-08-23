import * as z from 'zod';
import { Role } from '../enums/Role';

function isValidPhoneNumber(phoneNumber: string) {
  return /^\+3859[125789]\d.{5,6}$/.test(phoneNumber);
}

function isOibValid(oib: string) {
  if (/\d{11}/.exec(oib) === null) {
    return false;
  }

  let calculated = 10;

  for (const digit of oib.substring(0, 10)) {
    calculated += parseInt(digit);
    calculated %= 10;

    if (calculated === 0) {
      calculated = 10;
    }

    calculated *= 2;
    calculated %= 11;
  }

  const check = 11 - calculated === 10 ? 0 : 11 - calculated;
  return check === parseInt(oib[10]);
}

const roleArray = [
  Role.PROGRAMER,
  Role.WEB_DEVELOPER,
  Role.DESIGNER,
  Role.TESTER,
] as const;

export const JoinSchema = z.object({
  name: z
    .string({ required_error: 'You must enter your name' })
    .min(2, 'You must enter at least 2 characters')
    .max(50, 'You must enter at most 50 characters'),
  email: z.string().email('Invalid email'),
  oib: z.string().refine(isOibValid, 'Invalid OIB'),
  dob: z.string().date('Invalid date'),
  isStudent: z.boolean(),
  role: z.enum(roleArray).array().nonempty('You must select at least one role'),
  discordUsername: z
    .string({ required_error: 'You must enter your discord username' })
    .min(2, 'You must enter at least 2 characters')
    .max(50, 'You must enter at most 50 characters'),
  phoneNumber: z
    .string({ required_error: 'You must enter your phone number' })
    .refine(isValidPhoneNumber, 'Invalid phone number'),
  placeOfResidence: z
    .string({ required_error: 'You must enter where you work' })
    .min(2, 'You must enter at least 2 characters')
    .max(50, 'You must enter at most 50 characters'),
  terms: z
    .boolean()
    .refine((value) => value === true, 'You must accept the terms'),
});

export type JoinSchemaType = z.infer<typeof JoinSchema>;
