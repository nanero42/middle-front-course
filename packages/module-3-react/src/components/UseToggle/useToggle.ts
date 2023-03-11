import { useState } from "react";

let index = 0;

export function useToggle(args: string[] | null): [string, Function] {
  const isArray = Array.isArray(args);
  const isPlentyArgs = isArray && args.length >= 2;

  const [value, setValue] = useState(() => {
    if (isArray && isPlentyArgs) {
      return args[0];
    }

    return false;
  });

  const toggle = (toggleValue?: string) => {
    if (toggleValue) {
      setValue(toggleValue);
      return;
    }

    if (!isArray && !isPlentyArgs) {
      setValue(!value);
      return;
    }

    if (index === args.length - 1) {
      index = 0;
      setValue(args[index]);
      return;
    }

    setValue(args[++index]);
  }

  return [value.toString(), toggle];
}