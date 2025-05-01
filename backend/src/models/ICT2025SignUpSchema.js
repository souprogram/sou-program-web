const { z } = require('zod');

const ICT2025SignUpSchema = z.object({
  name: z
    .string({ required_error: 'Moraš upisati svoje ime' })
    .max(50, 'Moraš upisati najviše 50 znakova'),
  surname: z
    .string({ required_error: 'Moraš upisati svoje prezime' })
    .max(50, 'Moraš upisati najviše 50 znakova'),
  username: z
    .string({ required_error: 'Moraš upisati svoj naziv za scoreboard' })
    .max(50, 'Moraš upisati najviše 50 znakova'),
  email: z.string().email('Neispravan email'),
});

const ICT2025FinishSchema = z.object({
  elapsed_time_seconds: z
    .number({ required_error: 'Moraš upisati vrijeme' })
    .min(0, 'Vrijeme mora biti veće od 0')
    .max(3600, 'Maksimalno vrijeme je 1 sat'),
});

module.exports = { ICT2025SignUpSchema, ICT2025FinishSchema };
