import Button from '@/components/ui/Button';
import { useState } from 'react';

export const MathExpressionTask = ({
  task,
  onCheck,
}: {
  task: CompetitionTasks['math'];
  onCheck: (answer: string) => boolean;
}) => {
  const [answer, setAnswer] = useState('');

  const handleCheck = () => {
    onCheck(answer);
  };

  return (
    <div
      className={`rounded-lg p-6 ${task.isCorrect ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
    >
      <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
        Zadatak 2: Matematički izraz
      </h3>
      <p className="mb-4">Izračunaj sljedeći izraz:</p>
      <div className="mb-5 rounded-md bg-neutral-700 p-3 font-mono text-xl font-bold">
        {task.task.expression}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="flex-1 rounded-md bg-neutral-700 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={task.showResult && task.isCorrect}
            autoComplete="off"
          />
          {!(task.showResult && task.isCorrect) && (
            <Button onClick={handleCheck} disabled={!answer.trim()}>
              Provjeri
            </Button>
          )}
        </div>
        {task.showResult && (
          <p className={`${task.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {task.isCorrect ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
          </p>
        )}
      </div>
    </div>
  );
};
