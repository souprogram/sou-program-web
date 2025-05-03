import Button from '@/components/ui/Button';
import { useState } from 'react';

export const JSTask = ({
  task,
  onCheck,
}: {
  task: CompetitionTasks['js'];
  onCheck: (code: string) => boolean;
}) => {
  const [code, setCode] = useState('');

  const handleCheck = () => {
    onCheck(code);
  };

  return (
    <div
      className={`rounded-lg p-6 ${task.isCorrect ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
    >
      <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
        Zadatak 4: Dopuni funkciju
      </h3>
      <p className="mb-4">{task.task.description}</p>
      <div className="mb-4 rounded-md bg-neutral-700 p-4 font-mono">
        <pre>{task.task.code}</pre>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 rounded-md bg-neutral-700 p-3 font-mono text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          autoComplete="off"
          placeholder="Unesi kod koji nedostaje"
        />
      </div>
      <div className="mb-4 rounded-md bg-neutral-700 p-4">
        <p className="mb-2 text-sm text-neutral-400">Primjer:</p>
        <div className="font-mono text-sm">
          Input: <span className="text-yellow-200">{JSON.stringify(task.task.testCase.input)}</span>
          <br />
          Očekivani output:{' '}
          <span className="text-green-200">{JSON.stringify(task.task.testCase.output)}</span>
        </div>
      </div>
      <Button onClick={handleCheck} disabled={task.isCorrect}>
        Provjeri
      </Button>
      {task.showResult && (
        <p className={`${task.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
          {task.isCorrect ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
        </p>
      )}
    </div>
  );
};
