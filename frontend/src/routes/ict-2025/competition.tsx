import Button from '@/components/ui/Button';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const Route = createFileRoute('/ict-2025/competition')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [task1Answer, setTask1Answer] = useState('');
  const [task2Answer, setTask2Answer] = useState('');
  const [showResults1, setShowResults1] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(true);

  // Caesar Cipher Task
  const encryptedWord = 'Khoor';
  const cipherKey = 3;
  const correctAnswer1 = 'Hello';

  // Math Expression Task
  const mathExpression = '5 * 3 + 10 / 2 - 4';
  const correctAnswer2 = '16';

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Format time as MM:SS
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const checkTask1 = () => {
    const correct = task1Answer.toLowerCase().trim() === correctAnswer1.toLowerCase();
    setIsCorrect1(correct);
    setShowResults1(true);
    return correct;
  };

  const checkTask2 = () => {
    const correct = task2Answer.toLowerCase().trim() === correctAnswer2.toLowerCase();
    setIsCorrect2(correct);
    setShowResults2(true);
    return correct;
  };

  const checkAllAnswers = () => {
    const allCorrect = checkTask1() && checkTask2();
    if (allCorrect) {
      setIsRunning(false);
      navigate({ to: '/ict-2025/finish' });
    }
  };

  const allTasksCompleted = isCorrect1 && isCorrect2;

  return (
    <section className="relative overflow-hidden bg-neutral-900 pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:top-0 sm:left-[50%] sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <h2 className="font-brioni mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Natjecanje kreće sada!
        </h2>
        <div className="flex max-w-screen-sm flex-col gap-8 leading-relaxed text-gray-200">
          {/* Task 1: Caesar Cipher */}
          <div className="rounded-lg bg-neutral-800 p-6">
            <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
              Zadatak 1: Caesar Cipher
            </h3>
            <p className="mb-4">
              Dekodiraj sljedeću riječ koristeći Caesar cipher s ključem {cipherKey}:
            </p>
            <div className="mb-6 rounded bg-neutral-700 p-4 font-mono text-xl font-bold">
              {encryptedWord}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  id="task1"
                  type="text"
                  value={task1Answer}
                  onChange={(e) => setTask1Answer(e.target.value)}
                  className="flex-1 rounded bg-neutral-700 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  disabled={showResults1 && isCorrect1}
                />
                {!(showResults1 && isCorrect1) && (
                  <Button onClick={checkTask1} disabled={!task1Answer.trim()}>
                    Provjeri
                  </Button>
                )}
              </div>
              {showResults1 && (
                <p className={`${isCorrect1 ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect1 ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
                </p>
              )}
            </div>
          </div>

          {/* Task 2: Math Expression */}
          <div className="rounded-lg bg-neutral-800 p-6">
            <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
              Zadatak 2: Matematički izraz
            </h3>
            <p className="mb-4">Izračunaj sljedeći izraz:</p>
            <div className="mb-6 rounded bg-neutral-700 p-4 font-mono text-xl font-bold">
              {mathExpression}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  id="task2"
                  type="text"
                  value={task2Answer}
                  onChange={(e) => setTask2Answer(e.target.value.toLowerCase())}
                  className="flex-1 rounded bg-neutral-700 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  disabled={showResults2 && isCorrect2}
                />
                {!(showResults2 && isCorrect2) && (
                  <Button onClick={checkTask2} disabled={!task2Answer.trim()}>
                    Provjeri
                  </Button>
                )}
              </div>
              {showResults2 && (
                <p className={`text-sm ${isCorrect2 ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect2 ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2">
              <ClockIcon />
              <span className="font-mono text-lg font-medium text-white">{formatTime(time)}</span>
            </div>

            <Button
              onClick={checkAllAnswers}
              disabled={!allTasksCompleted}
              className={allTasksCompleted ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              {allTasksCompleted ? 'Završi natjecanje →' : 'Provjeri odgovore'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
