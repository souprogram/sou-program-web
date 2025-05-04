import { generateCipherTask } from '@/utils/ceasarCipher';
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { generateMathExpression } from '@/utils/mathExpression';
import { generateJSTask } from '@/utils/jsTask';
import { generateSolvableLightsOutBoard } from '@/utils/lightsOut';

export const useTaskManager = () => {
  const initialGrid = generateSolvableLightsOutBoard();

  const [tasks, setTasks] = useLocalStorage<CompetitionTasks>('tasks', {
    cipher: { isSolved: false, task: generateCipherTask() },
    math: { isSolved: false, task: generateMathExpression() },
    js: { isSolved: false, task: generateJSTask() },
    lights: { isSolved: false, grid: initialGrid, initialGrid },
  });

  const isAllCompleted = useMemo(
    () =>
      tasks.cipher.isSolved && tasks.math.isSolved && tasks.js.isSolved && tasks.lights.isSolved,
    [tasks],
  );

  return { tasks, setTasks, isAllCompleted };
};
