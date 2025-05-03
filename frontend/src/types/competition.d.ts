type TaskState = {
  isCorrect: boolean;
  showResult: boolean;
};

type CipherTask = {
  word: string;
  key: number;
  encrypted: string;
};

type MathTask = {
  expression: string;
  answer: string;
};

type TJSTask = {
  description: string;
  code: string;
  functionName: string;
  testCase: {
    input: number | string | boolean | any[];
    output: number | string | boolean | any[];
  };
};

type LightsTask = {
  isSolved: boolean;
  grid: boolean[][];
  initialGrid: boolean[][];
};

type CompetitionTasks = {
  cipher: TaskState & { task: CipherTask };
  math: TaskState & { task: MathTask };
  js: TaskState & { task: JSTask };
  lights: LightsTask;
};
