export const SchoolGrade = {
  GRADE_4: '4. razred',
  GRADE_5: '5. razred',
  GRADE_6: '6. razred',
  GRADE_7: '7. razred',
  GRADE_8: '8. razred',
} as const;

export type SchoolGradeType = (typeof SchoolGrade)[keyof typeof SchoolGrade];
