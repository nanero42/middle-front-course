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

  // import { useViewportSize } from '@mantine/hooks';

  // function Demo() {
  //   const { height, width } = useViewportSize();

  //   return (
  //     <>
  //       Width: {width}, height: {height}
  //     </>
  //   );
  // }
}
