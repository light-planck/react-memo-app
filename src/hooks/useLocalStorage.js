import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      throw new Error(`Could not retrieve localStorage item: ${error}`);
    }
  });

  const setLocalStorageValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      throw new Error(`Could not set localStorage item: ${error}`);
    }
  };

  return { storedValue, setLocalStorageValue };
};
