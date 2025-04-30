import * as z from 'zod';
import { Role } from '../enums/Role';
import { Study } from '../enums/Study';
import { isValidPhoneNumber } from '../utils/isValidPhoneNumber';
import { isValidZipCode } from '../utils/isValidZipCode';
import { isValidOib } from '../utils/isValidOib';

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
      .enum(Object.values(Role) as [string, ...string[]])
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
      .refine((value) => value === true, 'Moraš prihvatiti sve uvjete i odredbe Statuta'),
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

export const memberListSearchSchema = z.object({
  table_view_access_key: z.string().nullish(),
});

export const memberSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime({ offset: true }),
  full_name: z.string(),
  email: z.string().email(),
  oib: z.string(),
  dob: z.string().date(),
  is_unipu_student: z.boolean(),
  role: z.enum(Object.values(Role) as [string, ...string[]]).array(),
  discord_username: z.string(),
  phone_number: z.string(),
  city: z.string(),
  study: z.nativeEnum(Study).nullish(),
  zip_code: z.string(),
  confirmed_at: z.string().datetime({ offset: true }).nullish(),
  payment_status: z.boolean().nullish(),
  left_at: z.string().datetime({ offset: true }).nullish(),
  payment_date_due: z.string().datetime({ offset: true }).nullish(),
});

export type Member = z.infer<typeof memberSchema>;

export const memberListSchema = z.object({
  data: z.array(memberSchema),
});

export type MemberList = z.infer<typeof memberListSchema>;
