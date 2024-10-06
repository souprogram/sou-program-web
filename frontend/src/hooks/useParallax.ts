import { useLayoutEffect, useRef, useState } from 'react';

export function useParallax(multiplier = 0.4) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useLayoutEffect(() => {
    const getOffsetY = () => {
      const base = parentRef.current;
      if (!base) {
        return window.scrollY * multiplier;
      }

      const top = base.getBoundingClientRect().top;
      const height = base.getBoundingClientRect().height;

      return (height - top) * multiplier;
    };

    const handleScroll = () => {
      const offsetY = getOffsetY();

      setOffsetY(offsetY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);

  return {
    parentRef,
    offsetY,
  };
}
