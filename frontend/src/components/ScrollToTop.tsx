import { useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      if (location.hash) {
        const elementId = location.hash.replace('#', '');
        const scrollToElement = () => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            setTimeout(scrollToElement, 100);
          }
        };
        scrollToElement();
      } else {
        window.scrollTo(0, 0);
      }
    }

    handleScroll();
  }, [location]);

  return null;
}
