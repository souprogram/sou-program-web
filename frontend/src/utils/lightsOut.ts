export const generateSolvableLightsOutBoard = () => {
  const size = 5;
  const grid = Array(size)
    .fill(false)
    .map(() => Array<boolean>(size).fill(false));

  const moves = Math.floor(Math.random() * 2) + 5; // Randomly 5 or 6 moves
  const usedPositions = new Set<string>(); // Track used (row,col) pairs

  let movesApplied = 0;

  while (movesApplied < moves) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    const positionKey = `${row},${col}`;

    // Skip if this position was already used
    if (usedPositions.has(positionKey)) continue;

    usedPositions.add(positionKey);
    movesApplied++;

    // Simulate a click
    grid[row][col] = !grid[row][col];
    if (row > 0) grid[row - 1][col] = !grid[row - 1][col];
    if (row < size - 1) grid[row + 1][col] = !grid[row + 1][col];
    if (col > 0) grid[row][col - 1] = !grid[row][col - 1];
    if (col < size - 1) grid[row][col + 1] = !grid[row][col + 1];
  }

  return grid;
};
