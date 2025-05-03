export const generateJSTask = () => {
  const tasks = [
    {
      description: 'Dopuni funkciju koja vraca dvostruku vrednost broja',
      code: `function double(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'double',
      solution: 'result = num * 2',
      testCase: { input: 5, output: 10 },
    },
    {
      description: 'Dopuni funkciju koja proverava da li je broj paran',
      code: `function isEven(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isEven',
      solution: 'result = num % 2 === 0',
      testCase: { input: 4, output: true },
    },
    {
      description: 'Dopuni funkciju koja zbraja dva broja',
      code: `function add(a, b) {\n  // Missing line\n  return result;\n}`,
      functionName: 'add',
      solution: 'result = a + b',
      testCase: { input: [3, 4], output: 7 },
    },
    {
      description: 'Dopuni funkciju koja vraća najveći broj u nizu',
      code: `function findMax(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'findMax',
      solution: 'result = Math.max(...arr)',
      testCase: { input: [1, 2, 3, 4, 5], output: 5 },
    },
    {
      description: 'Dopuni funkciju koja vraća najmanji broj u nizu',
      code: `function findMin(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'findMin',
      solution: 'result = Math.min(...arr)',
      testCase: { input: [1, 2, 3, 4, 5], output: 1 },
    },
  ];
  return tasks[Math.floor(Math.random() * tasks.length)];
};
