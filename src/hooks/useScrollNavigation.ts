import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface ScrollNavigation {
  prevPage?: string;
  nextPage?: string;
  delay?: number;
}

export const useScrollNavigation = ({ prevPage, nextPage, delay = 200 }: ScrollNavigation) => {
  const navigate = useNavigate();
  const scrollTimeout = useRef<number | undefined>();

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        if (event.deltaY < 0 && prevPage) {
          navigate(prevPage);
        }

        if (event.deltaY > 0 && nextPage) {
          navigate(nextPage);
        }
      }, delay);
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [navigate, prevPage, nextPage, delay]);
};
