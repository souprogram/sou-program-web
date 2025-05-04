export const generateJSTask = (): CompetitionTasks['js']['task'] => {
  const tasks = [
    {
      description: 'Dopuni funkciju koja izračunava popust od 20% na cijenu',
      code: `function applyDiscount(price) {\n  // Missing line\n  return result;\n}`,
      functionName: 'applyDiscount',
      testCases: [
        { input: [100], output: 80 },
        { input: [50], output: 40 },
        { input: [200], output: 160 },
      ],
    },
    {
      description: 'Dopuni funkciju koja računa cijenu s popustom (cijena i popust u %)',
      code: `function calculateDiscount(price, discount) {\n  // Missing line\n  return result;\n}`,
      functionName: 'calculateDiscount',
      testCases: [
        { input: [100, 20], output: 80 },
        { input: [50, 10], output: 45 },
        { input: [200, 50], output: 100 },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava da li je broj paran',
      code: `function isEven(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isEven',
      testCases: [
        { input: [4], output: true },
        { input: [7], output: false },
        { input: [0], output: true },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava da li je broj neparan',
      code: `function isOdd(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isOdd',
      testCases: [
        { input: [4], output: false },
        { input: [7], output: true },
        { input: [0], output: false },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava je li košara prazna',
      code: `function isCartEmpty(cart) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isCartEmpty',
      testCases: [
        { input: [[]], output: true },
        { input: [[1, 2, 3]], output: false },
        { input: [['item']], output: false },
      ],
    },
    {
      description: 'Dopuni funkciju koja računa ukupnu cijenu narudžbe (cijena x količina)',
      code: `function calculateTotal(price, quantity) {\n  // Missing line\n  return result;\n}`,
      functionName: 'calculateTotal',
      testCases: [
        { input: [10, 5], output: 50 },
        { input: [15, 0], output: 0 },
        { input: [20, 3], output: 60 },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava može li korisnik glasati (18+ godina)',
      code: `function canVote(age) {\n  // Missing line\n  return result;\n}`,
      functionName: 'canVote',
      testCases: [
        { input: [20], output: true },
        { input: [17], output: false },
        { input: [18], output: true },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava je li email validan (sadrži @)',
      code: `function isValidEmail(email) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isValidEmail',
      testCases: [
        { input: ['user@example.com'], output: true },
        { input: ['invalid.email'], output: false },
        { input: ['another@test.com'], output: true },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava je li lozinka dovoljno dugačka (6+ znakova)',
      code: `function isPasswordLongEnough(pw) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isPasswordLongEnough',
      testCases: [
        { input: ['abc123'], output: true },
        { input: ['short'], output: false },
        { input: ['longenough'], output: true },
      ],
    },
    {
      description: 'Dopuni funkciju koja vraća najveći broj u nizu',
      code: `function findMax(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'findMax',
      testCases: [
        { input: [[1, 2, 3, 4, 5]], output: 5 },
        { input: [[-1, -2, -3]], output: -1 },
        { input: [[10, 10, 10]], output: 10 },
      ],
    },
    {
      description: 'Dopuni funkciju koja vraća najmanji broj u nizu',
      code: `function findMin(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'findMin',
      testCases: [
        { input: [[1, 2, 3, 4, 5]], output: 1 },
        { input: [[-1, -2, -3]], output: -3 },
        { input: [[10, 10, 10]], output: 10 },
      ],
    },
    {
      description: 'Dopuni funkciju koja vraća zbroj svih brojeva u nizu',
      code: `function sumArray(arr) {\n  // Missing line\n  return result;\n}`,
      functionName: 'sumArray',
      testCases: [
        { input: [[1, 2, 3, 4, 5]], output: 15 },
        { input: [[-1, 0, 1]], output: 0 },
        { input: [[10, 20, 30]], output: 60 },
      ],
    },
    {
      description: 'Dopuni funkciju koja vraća broj riječi u rečenici',
      code: `function countWords(sentence) {\n  // Missing line\n  return result;\n}`,
      functionName: 'countWords',
      testCases: [
        { input: ['Hello world'], output: 2 },
        { input: ['One'], output: 1 },
        { input: ['This is a test'], output: 4 },
      ],
    },
    {
      description: 'Dopuni funkciju koja miće razmake iz rečenice',
      code: `function withoutSpaces(str) {\n  // Missing line\n  return result;\n}`,
      functionName: 'withoutSpaces',
      testCases: [
        { input: ['Hello World'], output: 'HelloWorld' },
        { input: ['NoSpacesHere'], output: 'NoSpacesHere' },
        { input: ['     Trim  Me    '], output: 'TrimMe' },
      ],
    },
    {
      description: 'Dopuni funkciju koja vraća kvadrat broja',
      code: `function square(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'square',
      testCases: [
        { input: [4], output: 16 },
        { input: [-3], output: 9 },
        { input: [0], output: 0 },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava da li je broj pozitivan',
      code: `function isPositive(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isPositive',
      testCases: [
        { input: [5], output: true },
        { input: [-3], output: false },
        { input: [0], output: false },
      ],
    },
    {
      description: 'Dopuni funkciju koja provjerava da li je broj negativan',
      code: `function isNegative(num) {\n  // Missing line\n  return result;\n}`,
      functionName: 'isNegative',
      testCases: [
        { input: [4], output: false },
        { input: [-2], output: true },
        { input: [0], output: false },
      ],
    },
    {
      description: 'Dopuni funkciju koja filtrira samo pozitivne brojeve',
      code: `function getPositives(numbers) {\n  // Missing line\n  return result;\n}`,
      functionName: 'getPositives',
      testCases: [
        { input: [[1, -2, 3, -4]], output: [1, 3] },
        { input: [[-1, -2, -3]], output: [] },
        { input: [[5, 10, 15]], output: [5, 10, 15] },
      ],
    },
    {
      description: 'Dopuni funkciju koja računa prosječnu ocjenu',
      code: `function averageGrade(grades) {\n  // Missing line\n  return result;\n}`,
      functionName: 'averageGrade',
      testCases: [
        { input: [[5, 4, 3]], output: 4 },
        { input: [[1, 2, 3, 4, 5]], output: 3 },
        { input: [[10, 10, 10]], output: 10 },
      ],
    },
  ];
  return tasks[Math.floor(Math.random() * tasks.length)];
};
