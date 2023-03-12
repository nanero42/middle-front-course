import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export function UseLocalStorage() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div>
      <p>
        Твой токен:
        {' '}
        { token }
      </p>
      <div>
        <button type="button" onClick={() => setItem('new-token')}>
          Задать токен
        </button>
        <button type="button" onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );

  // import { useLocalStorage } from './useLocalStorage';

  // function Demo() {
  //   const [token, { setItem, removeItem }] = useLocalStorage('token');

  //   return (
  //     <div>
  //       <p>
  //         Твой токен: { token }
  //       </p>
  //       <div>
  //         <button onClick={() => setItem('new-token')}>
  //           Задать токен
  //         </button>
  //         <button onClick={() => removeItem()}>
  //           Удалить токен
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
}
