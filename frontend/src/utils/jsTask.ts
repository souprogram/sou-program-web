export const generateJSTask = (): CompetitionTasks['js']['task'] => {
  const tasks = [
    {
      description: 'Dopuni funkciju koja vraca dvostruku vrednost broja',
      code: `function double(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'double',
      testCase: { input: 5, output: 10 },
    },
    {
      description: 'Dopuni funkciju koja proverava da li je broj paran',
      code: `function isEven(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isEven',
      testCase: { input: 4, output: true },
    },
    {
      description: 'Dopuni funkciju koja zbraja dva broja',
      code: `function add(a, b) {\n  // Missing line\n  return result;\n}`,
      functionName: 'add',
      testCase: { input: [3, 4], output: 7 },
    },
    {
      description: 'Dopuni funkciju koja vraća najveći broj u nizu',
      code: `function findMax(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'findMax',
      testCase: { input: [1, 2, 3, 4, 5], output: 5 },
    },
    {
      description: 'Dopuni funkciju koja vraća najmanji broj u nizu',
      code: `function findMin(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'findMin',
      testCase: { input: [1, 2, 3, 4, 5], output: 1 },
    },
    {
      description: 'Dopuni funkciju koja vraća zbir svih brojeva u nizu',
      code: `function sumArray(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'sumArray',
      testCase: { input: [1, 2, 3, 4, 5], output: 15 },
    },
    {
      description: 'Dopuni funkciju koja vraća broj reči u rečenici',
      code: `function countWords(sentence) {\n  // Missing line\n  return result;\n}`,
      functionName: 'countWords',
      testCase: { input: 'Hello world', output: 2 },
    },
    {
      description: 'Dopuni funkciju koja miće razmake iz rečenice',
      code: `function withoutSpaces(str) {\n  // Missing line\n  return result;\n}`,
      functionName: 'wthoutSpaces',
      testCase: { input: 'Hello World', output: 'HelloWorld' },
    },
  ];
  return tasks[Math.floor(Math.random() * tasks.length)];
};
