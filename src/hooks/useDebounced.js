import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300, callback) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
      if (callback) callback(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay, callback]);

  return debounced;
}
