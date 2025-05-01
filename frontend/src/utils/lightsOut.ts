export const generateSolvableLightsOutBoard = () => {
  const size = 5;

  const grid = Array(size)
    .fill(false)
    .map(() => Array<boolean>(size).fill(false));

  // const moves = Math.floor(Math.random() ) + 5;
  const moves = 5;
  for (let i = 0; i < moves; i++) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);

    // Simulate a click
    grid[row][col] = !grid[row][col];
    if (row > 0) grid[row - 1][col] = !grid[row - 1][col];
    if (row < size - 1) grid[row + 1][col] = !grid[row + 1][col];
    if (col > 0) grid[row][col - 1] = !grid[row][col - 1];
    if (col < size - 1) grid[row][col + 1] = !grid[row][col + 1];
  }

  return grid;
};
