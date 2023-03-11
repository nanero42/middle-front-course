import { useEffect, useState } from 'react';

interface IScroll {
  x?: number;
  y?: number;
}

export function useWindowScroll(): [IScroll, ({ x, y }: IScroll) => void] {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollTo = ({ x, y }: IScroll) => window.scrollTo({ left: x, top: y });

  useEffect(() => {
    const scroll = () => setScroll({ x: window.scrollX, y: window.scrollY });
    window.addEventListener('scroll', scroll);
    return () => removeEventListener('scroll', scroll);
  }, [scroll]);

  return [scroll, scrollTo];
}
