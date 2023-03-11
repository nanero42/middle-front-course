import { useWindowScroll } from './useWindowScroll';
import './index.css';

export function UseWindowScroll() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="sticky">
      <p>
        Scroll position x:
        {' '}
        {scroll.x}
        , y:
        {' '}
        {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0, x: 0 })}>Scroll to top</button>
    </div>
  );
}
