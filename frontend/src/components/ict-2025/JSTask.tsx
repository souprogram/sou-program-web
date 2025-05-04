import Button from '@/components/ui/Button';
import { useState } from 'react';

export const JSTask = ({
  task,
  setTask,
}: {
  task: CompetitionTasks['js'];
  setTask: (task: CompetitionTasks['js']) => void;
}) => {
  const [code, setCode] = useState('');
  const [showResult, setShowResult] = useState(false);

  const [userOutput, setUserOutput] = useState<{
    firstTestOutput: string;
    firstFailedTest: number;
  } | null>(null);

  const checkJSTask = (userCode: string) => {
    try {
      const fullCode = `${task.task.code.replace('// Missing line', userCode)}`;
      const func = new Function(`${fullCode}; return ${task.task.functionName};`)();

      for (let i = 0; i < task.task.testCases.length; i++) {
        const testCase = task.task.testCases[i];

        const input = Array.isArray(testCase.input) ? testCase.input : [testCase.input];
        const output = func(...input);

        if (JSON.stringify(output) !== JSON.stringify(testCase.output)) {
          setUserOutput({
            firstTestOutput: JSON.stringify(output),
            firstFailedTest: i + 1,
          });

          setTask({ ...task, isSolved: false });
          setShowResult(true);
          return;
        }
      }

      setUserOutput({
        firstTestOutput: JSON.stringify(task.task.testCases[0].output),
        firstFailedTest: 0,
      });

      setTask({ ...task, isSolved: true });
      setShowResult(true);
    } catch (error) {
      setUserOutput({
        firstTestOutput: error instanceof Error ? error.message : 'Unknown error',
        firstFailedTest: 1,
      });

      setTask({ ...task, isSolved: false });
      setShowResult(true);
    }
  };

  return (
    <div
      className={`rounded-lg p-6 ${task.isSolved ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
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
          Input:{' '}
          <span className="text-yellow-200">{JSON.stringify(task.task.testCases[0].input)}</span>
          <br />
          Očekivani output:{' '}
          <span className="text-green-200">{JSON.stringify(task.task.testCases[0].output)}</span>
        </div>
      </div>

      {userOutput && (
        <>
          {!(userOutput.firstFailedTest > 1) ? (
            <div className="mb-4 rounded-md bg-neutral-700 p-4">
              <p className="mb-2 text-sm text-neutral-400">Tvoj output:</p>
              <div className="font-mono text-sm">
                <span className={task.isSolved ? 'text-green-200' : 'text-red-200'}>
                  {userOutput.firstTestOutput}
                </span>
              </div>
            </div>
          ) : (
            <div className="mb-4 rounded-md bg-neutral-700 p-4">
              <p className="mb-2 text-sm text-neutral-400">Tvoj output:</p>
              <div className="font-mono text-sm">
                <span className={task.isSolved ? 'text-green-200' : 'text-red-200'}>
                  Test case #{userOutput.firstFailedTest} failed.
                </span>
              </div>
            </div>
          )}
        </>
      )}

      <Button onClick={() => checkJSTask(code)} disabled={task.isSolved}>
        Provjeri
      </Button>
      {showResult && (
        <p className={`${task.isSolved ? 'text-green-400' : 'text-red-400'}`}>
          {task.isSolved ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
        </p>
      )}
    </div>
  );
};
