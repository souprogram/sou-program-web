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
    .string({ required_error: 'Moraš upisati ime i prezime' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  email: z.string().email('Neispravan email'),
  oib: z.string().refine(isOibValid, 'Neispravan OIB'),
  dob: z.string().date('Neispravan datum rođenja'),
  isStudent: z.boolean(),
  role: z.enum(roleArray).array().nonempty('Moraš odabrati barem jednu ulogu'),
  discordUsername: z
    .string({ required_error: 'Moraš upisati svoj discord username' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  phoneNumber: z
    .string({ required_error: 'Moraš upisati svoj broj mobitela' })
    .refine(isValidPhoneNumber, 'Neispravan broj mobitela'),
  placeOfResidence: z
    .string({ required_error: 'Moraš unijeti svoje mjesto stanovanja' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  terms: z
    .boolean()
    .refine(
      (value) => value === true,
      'Moraš prihvatiti sve uvjete i odredbe Statuta',
    ),
});

export type JoinSchemaType = z.infer<typeof JoinSchema>;
