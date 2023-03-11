import { useEffect, useRef, useState } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null as unknown as HTMLDivElement);

  useEffect(() => {
    const div = ref.current as HTMLDivElement;

    const mouseover = () => setHovered(true);
    const mouseleave = () => setHovered(false);

    const listeners = [
      { type: 'mouseover', listener: mouseover },
      { type: 'mouseleave', listener: mouseleave },
    ];

    listeners.forEach(({ type, listener }) => div.addEventListener(type, listener));

    return () => listeners.forEach(({ type, listener }) => removeEventListener(type, listener));
  }, [ref.current]);

  return { hovered, ref };
}
