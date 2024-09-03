import { Role } from '../enums/Role';
import { Study } from '../enums/Study';
import { SchoolGrade } from '../enums/SchoolGrade';

export const roleOptions = [
  { value: Role.SOU_LAB, label: 'Šou lab' },
  { value: Role.SOU_PODCAST, label: 'Šou podcast' },
  { value: Role.MARKETING, label: 'Marketing' },
  { value: Role.DESIGNER, label: 'Designer' },
];

export const studyOptions = [
  { value: Study.FIPU, label: 'FIPU - Fakultet informatike u Puli' },
  { value: Study.TFPU, label: 'TFPU - Tehnički fakultet u Puli' },
  { value: Study.MAPU, label: 'MAPU - Muzička akademija u Puli' },
  {
    value: Study.FET,
    label: 'FET - Fakultet ekonomije i turizma "Dr. Mijo Mirković" u Puli',
  },
  { value: Study.FPZ, label: 'FPZ - Fakultet prirodne znanosti u Puli' },
  {
    value: Study.FOOZ,
    label: 'FOOZ - Fakultet za odgojne i obrazovne znanosti u Puli',
  },
  { value: Study.FFPU, label: 'FFPU - Filozofski fakultet u Puli' },
  { value: Study.MFPU, label: 'MFPU - Medicinski fakultet u Puli' },
  { value: Study.DAK, label: 'DAK - Dizajn i audiovizualne komunikacije' },
];

export const schoolGradeOptions = [
  { value: SchoolGrade.GRADE_4, label: '4. razred' },
  { value: SchoolGrade.GRADE_5, label: '5. razred' },
  { value: SchoolGrade.GRADE_6, label: '6. razred' },
  { value: SchoolGrade.GRADE_7, label: '7. razred' },
  { value: SchoolGrade.GRADE_8, label: '8. razred' },
];
