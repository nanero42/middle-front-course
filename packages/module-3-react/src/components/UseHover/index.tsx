import { useEffect } from 'react';
import { useHover } from './useHover';

export function UseHover() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );

  // import { useHover } from './useHover';

  // function Demo() {
  //   const { hovered, ref } = useHover();

  //   return (
  //     <div ref={ref}>
  //       {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
  //     </div>
  //   );
  // }
}
