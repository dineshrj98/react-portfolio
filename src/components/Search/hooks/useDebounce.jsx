import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

export const useDebounce = (callback, delay, deps) => {
  // Destructure properties from the useTimeout hook
  const { reset, clear } = useTimeout(callback, delay);

  // Reset the timeout whenever the callback, delay, or dependencies change
  useEffect(() => {
    reset(); // Reset the timeout on any change

    // Cleanup function: Clear the timeout on unmount
    return () => clear();
  }, [...deps, reset, clear]);

  // Return a function to trigger the debounced callback execution
  return () => {
    reset(); // Reset the timeout whenever the function is called
  };
};
