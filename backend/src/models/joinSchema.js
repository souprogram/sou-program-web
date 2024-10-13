const z = require('zod');
const { isValidPhoneNumber } = require('../utils/isValidPhoneNumber');

function isValidZipCode(zipCode) {
  return /^\d{5}$/.test(zipCode);
}

// function isOibValid(oib) {
//   if (/\d{11}/.exec(oib) === null) {
//     return false;
//   }

//   let calculated = 10;

//   for (const digit of oib.substring(0, 10)) {
//     calculated += parseInt(digit);
//     calculated %= 10;

//     if (calculated === 0) {
//       calculated = 10;
//     }

//     calculated *= 2;
//     calculated %= 11;
//   }

//   const check = 11 - calculated === 10 ? 0 : 11 - calculated;
//   return check === parseInt(oib[10]);
// }

function isValidOib(oib) {
  return /^\d{11}$/.test(oib);
}

const Role = {
  SOU_LAB: 'sou-lab',
  SOU_PODCAST: 'sou-podcast',
  MARKETING: 'marketing',
  DESIGNER: 'designer',
};

const roleArray = [
  Role.SOU_LAB,
  Role.SOU_PODCAST,
  Role.MARKETING,
  Role.DESIGNER,
];

const Study = {
  FIPU: 'fipu',
  TFPU: 'tfpu',
  MAPU: 'mapu',
  FET: 'fet',
  FPZ: 'fpz',
  FOOZ: 'fooz',
  FFPU: 'ffpu',
  MFPU: 'mfpu',
  DAK: 'dak',
};

const JoinSchema = z
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

module.exports = JoinSchema;
