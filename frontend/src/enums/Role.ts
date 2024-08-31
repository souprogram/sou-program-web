export const Role = {
  SOU_LAB: 'sou-lab',
  SOU_PODCAST: 'sou-podcast',
  MARKETING: 'marketing',
  DESIGNER: 'designer',
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];
