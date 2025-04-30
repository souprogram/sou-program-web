export const Study = {
  FIPU: 'fipu',
  TFPU: 'tfpu',
  MAPU: 'mapu',
  FET: 'fet',
  FPZ: 'fpz',
  FOOZ: 'fooz',
  FFPU: 'ffpu',
  MFPU: 'mfpu',
  DAK: 'dak',
} as const;

export type StudyType = (typeof Study)[keyof typeof Study];
