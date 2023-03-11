import { useState } from 'react';

type TULSReturnValue = [
  token: string,
  funcs: {
    setItem: (newToken: string) => void,
    removeItem: () => void,
  }
]

export function useLocalStorage(tokenName: string): TULSReturnValue {
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem(tokenName);

    if (!localToken) {
      localStorage.setItem(tokenName, tokenName);
      return tokenName;
    }

    return localToken;
  });

  const removeItem = () => {
    localStorage.clear();
    setToken('');
  };

  const setItem = (newToken: string) => {
    localStorage.clear();

    localStorage.setItem(newToken, newToken);

    const brandNewToken = localStorage.getItem(newToken);
    setToken(brandNewToken as string);
  };

  return [
    token,
    { setItem, removeItem },
  ];
}
