import React from 'react';
import { useFetch } from './useFetch';

export function UseFetch() {
  const {
    data, isLoading, error, refetch,
  } = useFetch();

  return (
    <div className="App">
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data?.map((item: any) => (
        <div key={item.id}>
          {item.id}
          {' '}
          {item.title}
        </div>
      )) }
      <div>
        <button onClick={() => refetch({ params: { _limit: 3 } })}>
          Перезапросить
        </button>
      </div>
    </div>
  );
}
