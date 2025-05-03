import { generateCipherTask } from '@/utils/ceasarCipher';
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { generateMathExpression } from '@/utils/mathExpression';
import { generateJSTask } from '@/utils/jsTask';
import { generateSolvableLightsOutBoard } from '@/utils/lightsOut';

export const useTaskManager = () => {
  const initialGrid = generateSolvableLightsOutBoard();

  const [tasks, setTasks] = useLocalStorage<CompetitionTasks>('tasks', {
    cipher: { isCorrect: false, showResult: false, task: generateCipherTask() },
    math: { isCorrect: false, showResult: false, task: generateMathExpression() },
    js: { isCorrect: false, showResult: false, task: generateJSTask() },
    lights: { isSolved: false, grid: initialGrid, initialGrid },
  });

  const isAllCompleted = useMemo(
    () =>
      tasks.cipher.isCorrect && tasks.math.isCorrect && tasks.js.isCorrect && tasks.lights.isSolved,
    [tasks],
  );

  return { tasks, setTasks, isAllCompleted };
};
