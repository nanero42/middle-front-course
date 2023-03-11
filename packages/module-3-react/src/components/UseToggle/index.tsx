import { useToggle } from './useToggle';

export function UseToggle() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}
