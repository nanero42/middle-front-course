import axios from 'axios';
import { useEffect, useState } from 'react';

interface IParams {
  params: {
    _limit: number;
  }
}

type TData = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function useFetch(url = 'https://jsonplaceholder.typicode.com/posts') {
  const [data, setData] = useState([] as TData[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [params, setParams] = useState({ params: { _limit: 3 } });

  const refetch = (params: IParams) => setParams(params);

  useEffect(() => {
    setIsLoading(true);
    axios.get<TData[]>(url, params)
      .then(({ data }) => setData(data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [url, params]);

  return {
    data, isLoading, error, refetch,
  };
}

// function Demo() {
//   const {
//     data,
//     isLoading,
//     error,
//     refetch
//   } = useFetch('https://jsonplaceholder.typicode.com/posts');

//   return (
//     <div>
//       <div>
//         <button onClick={() => refetch({
//           params: {
//             _limit: 3
//           }
//         })}>
//           Перезапросить
//         </button>
//       </div>
//       {isLoading && 'Загрузка...'}
//       {error && 'Произошла ошибка'}
//       {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
//     </div>
//   );
// }
