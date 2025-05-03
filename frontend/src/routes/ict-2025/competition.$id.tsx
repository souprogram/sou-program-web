import { CaesarCipherTask } from '@/components/ict-2025/CaesarCypherTask';
import { JSTask } from '@/components/ict-2025/JSTask';
import { LightsOutTask } from '@/components/ict-2025/LightsOutTask';
import { MathExpressionTask } from '@/components/ict-2025/MathExpressionTask';
import { TimerDisplay } from '@/components/ict-2025/TimerDisplay';
import Button from '@/components/ui/Button';
import { useCompetitionTimer } from '@/hooks/useCompetitionTimer';
import { useTaskManager } from '@/hooks/useTaskManager';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import axios from 'axios';
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
  const params = Route.useParams();
  const navigate = useNavigate();

  const { elapsedSeconds, stopTimer } = useCompetitionTimer();

  const { tasks, setTasks, isAllCompleted } = useTaskManager();

  const checkCypherTask = (answer: string) => {
    const correct = answer.toLowerCase().trim() === tasks.cipher.task.word.toLowerCase();
    const cipherNewData = { isCorrect: correct, showResult: true };
    setTasks((prev) => ({ ...prev, cipher: { ...prev.cipher, ...cipherNewData } }));

    return correct;
  };

  const checkMathTask = (answer: string) => {
    const correct = answer.trim() === tasks.math.task.answer;
    const mathNewData = { isCorrect: correct, showResult: true };
    setTasks((prev) => ({ ...prev, math: { ...prev.math, ...mathNewData } }));

    return correct;
  };

  const checkJSTask = (answer: string) => {
    try {
      const jsTask = tasks.js.task;
      const fullCode = jsTask.code.replace('// Missing line', answer);

      const func = new Function('return (' + fullCode + ');')();
      const result = func(jsTask.testCase.input);
      const correct = JSON.stringify(result) === JSON.stringify(jsTask.testCase.output);

      setTasks((prev) => ({
        ...prev,
        js: { ...prev.js, isCorrect: correct, showResult: true },
      }));
      return correct;
    } catch (error) {
      console.error('Code evaluation failed:', error);
      setTasks((prev) => ({
        ...prev,
        js: { ...prev.js, isCorrect: false, showResult: true },
      }));
      return false;
    }
  };

  const checkAllAnswers = async () => {
    if (!isAllCompleted) return;

    stopTimer();
    localStorage.removeItem('tasks');

    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/ict-2025/finish/${params.id}`,
      { elapsed_time_seconds: elapsedSeconds },
    );

    if (response.status !== 200) {
      throw new Error('Greška prilikom slanja rezultata.');
    }

    navigate({ to: `/ict-2025/finish/${params.id}` });
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
          <CaesarCipherTask task={tasks.cipher} onCheck={checkCypherTask} />

          <MathExpressionTask task={tasks.math} onCheck={checkMathTask} />

          <LightsOutTask
            task={tasks.lights}
            setTask={(task) => setTasks((prev) => ({ ...prev, lights: task }))}
          />

          <JSTask task={tasks.js} onCheck={checkJSTask} />

          <div className="flex items-center justify-end gap-4">
            <TimerDisplay seconds={elapsedSeconds} />
            <Button
              onClick={checkAllAnswers}
              disabled={!isAllCompleted}
              className={isAllCompleted ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              {isAllCompleted ? 'Završi natjecanje →' : 'Provjeri odgovore'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
