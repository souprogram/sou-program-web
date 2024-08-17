export const Role = {
  PROGRAMER: 'programer',
  WEB_DEVELOPER: 'web-developer',
  DESIGNER: 'designer',
  TESTER: 'tester',
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];
