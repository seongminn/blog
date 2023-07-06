import { RefObject, useEffect, useState } from 'react';

const useItemHeight = (ref: RefObject<HTMLDivElement>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
};

export default useItemHeight;
