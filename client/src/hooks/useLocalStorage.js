import { useState } from "react";

// set up state properly
// capture the values from the form events
// if localStorage data, use that. otherwise use initalValues
// update localStorage when needed

// key: 'signupForm'
export const useLocalStorage = (initialValue, key) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};