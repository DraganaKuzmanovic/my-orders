import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });
  //inserting into the local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    //localStorage.clear();
  }, [key, value]);

  return [value, setValue];
}
