import * as z from 'zod';
import { Role } from '../Role';

const roleArray = [
  Role.PROGRAMER,
  Role.WEB_DEVELOPER,
  Role.DESIGNER,
  Role.TESTER,
] as const;

export const JoinSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  oib: z.string().min(10).max(11),
  dob: z.string().date(),
  isStudent: z.boolean(),
  role: z.enum(roleArray).array().nonempty(),
  discordUsername: z.string().min(2).max(50),
  phoneNumber: z.string().min(10).max(15),
  whereDoYouWork: z.string().min(2).max(50),
  terms: z.boolean(),
});

export type JoinSchemaType = z.infer<typeof JoinSchema>;
