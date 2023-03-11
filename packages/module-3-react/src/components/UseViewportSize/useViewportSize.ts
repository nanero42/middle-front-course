import { useEffect, useState } from 'react';

export function useViewportSize() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [height, setHeight] = useState(() => window.innerHeight);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => removeEventListener('resize', resize);
  }, []);

  return { width, height };
}
