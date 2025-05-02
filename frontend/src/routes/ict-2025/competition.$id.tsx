import Button from '@/components/ui/Button';
import { useCompetitionTimer } from '@/hooks/useCompetitionTimer';
import { generateCipherTask } from '@/utils/ceasarCipher';
import { generateSolvableLightsOutBoard } from '@/utils/lightsOut';
import { generateMathExpression } from '@/utils/mathExpression';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const Route = createFileRoute('/ict-2025/competition/$id')({
  component: RouteComponent,
  loader: async ({ params: { id } }) => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ict-2025/user/${id}`);
    if (response.status !== 200) {
      throw new Error('Greška prilikom učitavanja korisnika.');
    }
    return response.data.data;
  },
  errorComponent: () => {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-900">
        <h1 className="text-2xl font-bold text-white">Greška prilikom učitavanja korisnika.</h1>
      </div>
    );
  },
});

function RouteComponent() {
  const { id } = Route.useParams();

  const navigate = useNavigate();
  const [task1Answer, setTask1Answer] = useState('');
  const [task2Answer, setTask2Answer] = useState('');
  const [showResults1, setShowResults1] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);

  // Initialize timer state with timestamp approach
  const [startTime] = useState(() => {
    const savedTime = localStorage.getItem('competitionStartTime');
    return savedTime ? parseInt(savedTime) : Date.now();
  });

  const { elapsedSeconds, stopTimer } = useCompetitionTimer();

  // Initialize cipher task from localStorage or generate new one
  const [cipherTask] = useState(() => {
    const savedTask = localStorage.getItem('cipherTask');
    return savedTask ? JSON.parse(savedTask) : generateCipherTask();
  });

  const [mathTask] = useState(() => {
    const savedTask = localStorage.getItem('mathTask');
    return savedTask ? JSON.parse(savedTask) : generateMathExpression();
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('mathTask', JSON.stringify(mathTask));
  }, [mathTask]);

  const startGrid = useMemo(generateSolvableLightsOutBoard, []);

  const [lightsGrid, setLightsGrid] = useState<boolean[][]>(() => {
    const savedGrid = localStorage.getItem('lightsGrid');
    return savedGrid ? JSON.parse(savedGrid) : startGrid;
  });

  const resetGrid = () => {
    setLightsGrid(startGrid);
  };

  const [isLightsSolved, setIsLightsSolved] = useState(false);

  // Check if lights are solved
  useEffect(() => {
    const solved = lightsGrid.every((row) => row.every((cell) => !cell));
    setIsLightsSolved(solved);
  }, [lightsGrid]);

  // Save lights grid to localStorage
  useEffect(() => {
    localStorage.setItem('lightsGrid', JSON.stringify(lightsGrid));
  }, [lightsGrid]);

  // Toggle a light and its neighbors
  const toggleLight = (row: number, col: number) => {
    setLightsGrid((prev) => {
      const newGrid = prev.map((r) => [...r]);

      // Toggle clicked cell
      newGrid[row][col] = !newGrid[row][col];

      // Toggle neighbors
      if (row > 0) newGrid[row - 1][col] = !newGrid[row - 1][col]; // top
      if (row < 4) newGrid[row + 1][col] = !newGrid[row + 1][col]; // bottom
      if (col > 0) newGrid[row][col - 1] = !newGrid[row][col - 1]; // left
      if (col < 4) newGrid[row][col + 1] = !newGrid[row][col + 1]; // right

      return newGrid;
    });
  };

  // Save to localStorage whenever startTime changes
  useEffect(() => {
    if (!localStorage.getItem('competitionStartTime')) {
      localStorage.setItem('competitionStartTime', startTime.toString());
    }
  }, [startTime]);

  useEffect(() => {
    localStorage.setItem('cipherTask', JSON.stringify(cipherTask));
  }, [cipherTask]);

  const checkTask1 = () => {
    const correct = task1Answer.toLowerCase().trim() === cipherTask.word.toLowerCase();
    setIsCorrect1(correct);
    setShowResults1(true);
    return correct;
  };

  const checkTask2 = () => {
    const correct = task2Answer.trim() === mathTask.answer;
    setIsCorrect2(correct);
    setShowResults2(true);
    return correct;
  };

  const checkAllAnswers = async () => {
    const allCorrect = isCorrect1 && isCorrect2 && isLightsSolved;
    if (allCorrect) {
      stopTimer();
      // Clear localStorage
      localStorage.removeItem('competitionStartTime');
      localStorage.removeItem('cipherTask');
      localStorage.removeItem('mathTask');
      localStorage.removeItem('lightsGrid');

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/ict-2025/finish/${id}`,
        { elapsed_time_seconds: elapsedSeconds },
      );

      if (response.status !== 200) {
        throw new Error('Greška prilikom slanja rezultata.');
      }

      navigate({ to: `/ict-2025/finish/${id}` });
    }
  };

  const allTasksCompleted = isCorrect1 && isCorrect2 && isLightsSolved;

  useEffect(() => {
    return () => {
      if (!allTasksCompleted) {
        localStorage.removeItem('competitionStartTime');
        localStorage.removeItem('mathTask');
        localStorage.removeItem('cipherTask');
        localStorage.removeItem('lightsGrid');
      }
    };
  }, [allTasksCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');

    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <section className="relative overflow-hidden bg-neutral-900 pb-16">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:top-0 sm:left-[50%] sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-16 lg:px-8">
        <h2 className="font-brioni mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Natjecanje kreće sada!
        </h2>
        <div className="flex max-w-screen-sm flex-col gap-8 leading-relaxed text-gray-200">
          {/* Task 1: Caesar Cipher */}
          <div
            className={`rounded-lg p-6 ${isCorrect1 ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
          >
            <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
              Zadatak 1: Caesar Cipher
            </h3>
            <p className="mb-4">
              <strong>Opis:</strong> Cezarova šifra je tip šifre zamjene (substitucije), u kome se
              svako slovo otvorenog teksta zamjenjuje odgovarajućim slovom abecede, pomaknutim za
              određeni broj mjesta. Dekodiraj sljedeću riječ koristeći Caesar cipher. Ključ je pomak
              u abecedi.
            </p>
            <p className="mb-4">
              <strong>Primjer:</strong> Ako je ključ 3, slovo A postaje D, B postaje E itd.
            </p>
            <p className="mb-4">
              <strong>Abeceda:</strong>{' '}
              <span className="font-mono text-sm">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </span>
            </p>
            <p className="mb-1">
              <strong>Ključ:</strong> {cipherTask.key}
            </p>
            <p className="mb-4 text-sm text-neutral-400">Velika i mala slova nisu bitna.</p>
            <div className="mb-5 rounded-md bg-neutral-700 p-3 font-mono text-xl font-bold">
              {cipherTask.encrypted}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  id="task1"
                  type="text"
                  value={task1Answer}
                  onChange={(e) => setTask1Answer(e.target.value)}
                  className="flex-1 rounded-md bg-neutral-700 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  disabled={showResults1 && isCorrect1}
                  autoComplete="off"
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
          <div
            className={`rounded-lg p-6 ${isCorrect2 ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
          >
            <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
              Zadatak 2: Matematički izraz
            </h3>
            <p className="mb-4">Izračunaj sljedeći izraz:</p>
            <div className="mb-5 rounded-md bg-neutral-700 p-3 font-mono text-xl font-bold">
              {mathTask.expression}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  id="task2"
                  type="text"
                  value={task2Answer}
                  onChange={(e) => setTask2Answer(e.target.value.toLowerCase())}
                  className="flex-1 rounded-md bg-neutral-700 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  disabled={showResults2 && isCorrect2}
                  autoComplete="off"
                />
                {!(showResults2 && isCorrect2) && (
                  <Button onClick={checkTask2} disabled={!task2Answer.trim()}>
                    Provjeri
                  </Button>
                )}
              </div>
              {showResults2 && (
                <p className={`${isCorrect2 ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect2 ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
                </p>
              )}
            </div>
          </div>

          {/* Task 3: Lights Out */}
          <div
            className={`rounded-lg p-6 ${isLightsSolved ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
          >
            <h3 className="font-poppins mb-4 text-2xl font-bold text-white">
              Zadatak 3: Lights Out
            </h3>
            <p className="mb-4">
              <strong>Pravila:</strong> Klikom na kvadratić, gasite ili palite njega i susjedne
              kvadratiće. Cilj je ugasiti sva svijetla{' '}
              <span className="text-neutral-400">(svi kvadratići sivi).</span>
            </p>

            <div className="mb-5 flex flex-row items-start justify-center gap-x-4">
              <div className="grid grid-cols-5 gap-2">
                {lightsGrid.map((row, rowIndex) =>
                  row.map((isOn, colIndex) => (
                    <button
                      key={`${rowIndex}-${colIndex}`}
                      onClick={() => toggleLight(rowIndex, colIndex)}
                      disabled={isLightsSolved}
                      className={`h-12 w-12 rounded-md ${isOn ? 'bg-yellow-400' : 'bg-neutral-700'} ${!isLightsSolved ? 'hover:opacity-80' : ''}`}
                      aria-label={`Toggle light at row ${rowIndex + 1}, column ${colIndex + 1}`}
                    />
                  )),
                )}
              </div>

              {/* reset button */}
              <Button
                onClick={resetGrid}
                className={`mb-4 bg-neutral-400 hover:bg-neutral-500`}
                disabled={isLightsSolved}
              >
                Reset?
              </Button>
            </div>

            {isLightsSolved && <p className="text-green-400">Točno! ✔️</p>}
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2">
              <ClockIcon />
              <span className="font-mono text-lg font-medium text-white">
                {formatTime(elapsedSeconds)}
              </span>
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
