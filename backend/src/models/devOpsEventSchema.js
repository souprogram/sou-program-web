const { z } = require('zod');

const DevOpsEventSchema = z.object({
  fullName: z
    .string({ required_error: 'Moraš upisati svoje ime i prezime' })
    .min(2, 'Moraš upisati najmanje 2 znaka')
    .max(50, 'Moraš upisati najviše 50 znakova'),
  email: z.string().email('Neispravan email'),
});

module.exports = DevOpsEventSchema;
