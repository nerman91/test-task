import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDebounce = (value: string, delay: number) => {
  const navigate = useNavigate();

  useEffect(() => {
    const navigate = () =>
      setTimeout(() => {
        navigate('/advantages');
      }, delay);

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        navigate('/');
      }
      if (event.deltaY > 0) {
        navigate('/advantages');
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [navigate]);
};
