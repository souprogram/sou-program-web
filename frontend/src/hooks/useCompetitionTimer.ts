import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useCompetitionTimer = () => {
  const [startTime] = useLocalStorage('competitionStartTime', Date.now());
  const [isRunning, setIsRunning] = useState(true);

  const [elapsedSeconds, setElapsedSeconds] = useState(() =>
    Math.floor((Date.now() - startTime) / 1000),
  );

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  return { elapsedSeconds, stopTimer };
};
