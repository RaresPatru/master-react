import { useEffect, useState } from "react";

export default function useLocalStorage(key: any, defaultValue: any) {
  const [value, setValue] = useState<any>(() => {
    let currentValue: any;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
