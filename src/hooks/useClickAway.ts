import { useEffect } from 'react';
import { useRef } from 'react';

type ClickAwayHandler = (e: MouseEvent | TouchEvent) => void;

const useClickAway = <T extends Element>(handler: ClickAwayHandler) => {
  const ref = useRef<T>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEvent = (e: MouseEvent) => {
      !element.contains(e.target as Node) && savedHandler.current(e);
    };

    const handleTouceEvent = (e: TouchEvent) => {
      !element.contains(e.target as Node) && savedHandler.current(e);
    };

    document.addEventListener('mousedown', handleMouseEvent, { passive: true });
    document.addEventListener('touchstart', handleTouceEvent);

    return () => {
      document.removeEventListener('mousedown', handleMouseEvent);
      document.removeEventListener('touchstart', handleTouceEvent);
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
