type CipherTask = {
  word: string;
  key: number;
  encrypted: string;
};

type MathTask = {
  expression: string;
  answer: string;
};

type JSTask = {
  description: string;
  code: string;
  functionName: string;
  testCases: {
    input: (number | string | boolean | any[])[];
    output: number | string | boolean | any[];
  }[];
};

type CompetitionTasks = {
  cipher: { isSolved: boolean; task: CipherTask };
  math: { isSolved: boolean; task: MathTask };
  js: { isSolved: boolean; task: JSTask };
  lights: {
    isSolved: boolean;
    grid: boolean[][];
    initialGrid: boolean[][];
  };
};
