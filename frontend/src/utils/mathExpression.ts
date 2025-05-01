const OPERATORS = ['+', '-', '*', '/'] as const;

export const generateMathExpression = (): { expression: string; answer: string } => {
  // Generate expression with 8-12 numbers
  const numCount = Math.floor(Math.random() * 5) + 8; // 8-12 numbers
  let expression = '';
  let currentValue = Math.floor(Math.random() * 10) + 1; // Start with 1-10

  expression += currentValue;

  for (let i = 1; i < numCount; i++) {
    const op = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
    let nextValue: number;

    // Ensure division results in whole numbers
    if (op === '/') {
      const divisors = getDivisors(currentValue);
      nextValue = divisors[Math.floor(Math.random() * divisors.length)] || 1;
    } else {
      nextValue = Math.floor(Math.random() * 10) + 1;
    }

    expression += ` ${op} ${nextValue}`;
    currentValue = eval(expression); // Safe here because we control the input
  }

  // Verify the final result is integer
  const result = eval(expression) as number;
  if (!Number.isInteger(result)) {
    // If not integer, regenerate (recursion depth is limited by small expression size)
    return generateMathExpression();
  }

  return {
    expression,
    answer: result.toString(),
  };
};

// Helper to get proper divisors of a number
function getDivisors(n: number): number[] {
  n = Math.abs(n);
  const divisors = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}
