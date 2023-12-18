import { useEffect } from 'react';

import useToggle from './useToggle';

const useModal = () => {
  const [isOpen, toggle, setModalOpen] = useToggle(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return [isOpen, toggle, setModalOpen] as const;
};

export default useModal;
