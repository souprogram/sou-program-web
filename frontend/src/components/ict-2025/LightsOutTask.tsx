import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export const LightsOutTask = ({
  task,
  setTask,
}: {
  task: CompetitionTasks['lights'];
  setTask: (task: CompetitionTasks['lights']) => void;
}) => {
  const toggleLight = (row: number, col: number) => {
    const newGrid = task.grid.map((r) => [...r]);

    // Toggle clicked cell and neighbors
    newGrid[row][col] = !newGrid[row][col];
    if (row > 0) newGrid[row - 1][col] = !newGrid[row - 1][col];
    if (row < 4) newGrid[row + 1][col] = !newGrid[row + 1][col];
    if (col > 0) newGrid[row][col - 1] = !newGrid[row][col - 1];
    if (col < 4) newGrid[row][col + 1] = !newGrid[row][col + 1];

    setTask({ ...task, grid: newGrid });
  };

  const resetGrid = () => {
    setTask({ ...task, grid: task.initialGrid });
  };

  useEffect(() => {
    const isSolved = task.grid.every((row) => row.every((cell) => !cell));
    setTask({ ...task, isSolved });
  }, [task.grid]);

  return (
    <div
      className={`rounded-lg p-6 ${task.isSolved ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
    >
      <h3 className="font-poppins mb-4 text-2xl font-bold text-white">Zadatak 3: Lights Out</h3>
      <p className="mb-4">
        <strong>Pravila:</strong> Klikom na kvadratić, gasite ili palite njega i susjedne
        kvadratiće. Cilj je ugasiti sva svijetla{' '}
        <span className="text-neutral-400">(svi kvadratići sivi).</span>
      </p>

      <div className="mb-5 flex flex-row items-start justify-center gap-x-4">
        <div className="grid grid-cols-5 gap-2">
          {task.grid.map((row, rowIndex) =>
            row.map((isOn, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                onClick={() => toggleLight(rowIndex, colIndex)}
                disabled={task.isSolved}
                className={`h-12 w-12 rounded-md ${isOn ? 'bg-yellow-400' : 'bg-neutral-700'} ${!task.isSolved ? 'hover:opacity-80' : ''}`}
                aria-label={`Toggle light at row ${rowIndex + 1}, column ${colIndex + 1}`}
              />
            )),
          )}
        </div>
        <Button
          onClick={resetGrid}
          className="mb-4 bg-neutral-400 hover:bg-neutral-500"
          disabled={task.isSolved}
        >
          Reset?
        </Button>
      </div>
    </div>
  );
};
