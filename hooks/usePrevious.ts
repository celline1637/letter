import { useEffect, useRef } from 'react';

export default function usePrevious<T>(state: T): any {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref.current;
}
