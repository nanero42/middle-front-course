import { useViewportSize } from './useViewportSize';

export function UseViewportSize() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width:
      {' '}
      {width}
      , height:
      {' '}
      {height}
    </>
  );
}
