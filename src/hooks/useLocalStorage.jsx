import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue !== null && savedValue !== undefined) {
    try {
      return JSON.parse(savedValue);
    } catch (error) {
      return initialValue;
    }
  }

  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};

export default useLocalStorage;
