import { useEffect, useMemo, useState } from 'react';

import { throttle } from '@/utils/throttle';

const useScroll = () => {
  const [isHide, setIsHide] = useState(false);
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const pageYoffset = window.scrollY;
    const deltaY = pageYoffset - scroll;
    const hide = pageYoffset !== 0 && deltaY >= 1;

    setIsHide(hide);
    setScroll(pageYoffset);
  };

  const throttled = useMemo(() => throttle(onScroll, 250), [scroll]);

  useEffect(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttled, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttled);
    };
  }, [scroll]);

  return isHide;
};

export default useScroll;
