import { useEffect, useState } from "react";

// const getSavedValue = (key, initialValue) => {
//   const savedValue = JSON.parse(localStorage.getItem(key));
//   if (savedValue) return savedValue;
//   if (savedValue instanceof Function) return () => savedValue();
//   return initialValue;
// };

const getSavedValue = (key, initialValue) => {
  const savedValue = localStorage.getItem(key);

  // Check if the savedValue is not null or undefined
  if (savedValue !== null && savedValue !== undefined) {
    try {
      // Attempt to parse the savedValue as JSON
      return JSON.parse(savedValue);
    } catch (error) {
      // If parsing fails, return the initialValue
      return initialValue;
    }
  }

  // If savedValue is null or undefined, return the initialValue
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
