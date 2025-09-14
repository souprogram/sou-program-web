import { z } from 'zod';

export const Robotics3DModelingSchema = z.object({
  fullName: z.string().min(2, 'Ime i prezime mora sadržavati barem 2 znaka'),
  email: z.string().email('Unesite ispravnu email adresu'),
});

export type Robotics3DModelingSchemaType = z.infer<typeof Robotics3DModelingSchema>;
