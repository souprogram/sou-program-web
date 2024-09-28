import { useEffect, useState } from 'react';

export function useParallax(multiplier = 0.3) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * multiplier);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);

  return offsetY;
}
