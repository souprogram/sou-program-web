import * as z from 'zod';
import { Role } from '../enums/Role';
import { Study } from '../enums/Study';
import { isValidPhoneNumber } from '../utils/isValidPhoneNumber';
import { isValidZipCode } from '../utils/isValidZipCode';
import { isValidOib } from '../utils/isValidOib';

const roleArray = [
  Role.SOU_LAB,
  Role.SOU_PODCAST,
  Role.MARKETING,
  Role.DESIGNER,
] as const;

export const JoinSchema = z
  .object({
    name: z
      .string({ required_error: 'Moraš upisati ime i prezime' })
      .min(2, 'Moraš upisati najmanje 2 znaka')
      .max(50, 'Moraš upisati najviše 50 znakova'),
    email: z.string().email('Neispravan email'),
    oib: z.string().refine(isValidOib, 'Neispravan OIB'),
    dob: z.string().date('Neispravan datum rođenja'),
    isUNIPUStudent: z.boolean(),
    study: z.nativeEnum(Study).optional(),
    role: z
      .enum(roleArray)
      .array()
      .nonempty('Moraš odabrati barem jednu ulogu'),
    discordUsername: z
      .string({ required_error: 'Moraš upisati svoj discord username' })
      .min(2, 'Moraš upisati najmanje 2 znaka')
      .max(50, 'Moraš upisati najviše 50 znakova'),
    phoneNumber: z
      .string({ required_error: 'Moraš upisati svoj broj mobitela' })
      .refine(isValidPhoneNumber, 'Neispravan broj mobitela'),
    zipCode: z.string().refine(isValidZipCode, 'Neispravan kod'),
    city: z
      .string({ required_error: 'Moraš unijeti svoj grad stanovanja' })
      .min(2, 'Moraš upisati najmanje 2 znaka')
      .max(50, 'Moraš upisati najviše 50 znakova'),
    terms: z
      .boolean()
      .refine(
        (value) => value === true,
        'Moraš prihvatiti sve uvjete i odredbe Statuta',
      ),
  })
  .refine(
    (data) => {
      if (data.isUNIPUStudent) {
        return data.study !== undefined;
      }
      return true;
    },
    { message: 'Moraš odabrati studij', path: ['study'] },
  );

export type JoinSchemaType = z.infer<typeof JoinSchema>;
