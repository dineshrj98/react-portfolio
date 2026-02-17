import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (callback, delay) => {
  // Create refs to store the callback and timeout ID
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  // Update the callbackRef whenever the `callback` prop changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Create a memoized callback for setting the timeout
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  // Create a memoized callback for clearing the timeout
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current); // Clear only if timeout exists
  }, []);

  // Set the timeout on mount/change of delay, set, or clear functions
  useEffect(() => {
    set(); // Set the timeout on initial render or changes
    return clear; // Cleanup function to clear timeout on unmount
  }, [delay, set, clear]);

  // Create a memoized callback for resetting the timeout
  const reset = useCallback(() => {
    clear(); // Clear any existing timeout
    set();   // Set a new timeout
  }, [clear, set]);

  // Return an object containing reset and clear functions
  return { reset, clear };
};
