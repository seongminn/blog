import { useCallback, useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);
  const setBoolean = useCallback((nextState: boolean) => {
    setState(nextState);
  }, []);

  return [state, toggle, setBoolean] as const;
};

export default useToggle;
