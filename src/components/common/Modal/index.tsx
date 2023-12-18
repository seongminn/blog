import { ReactNode } from 'react';
import { useMemo } from 'react';
import ReactDOM from 'react-dom';

import * as S from './style';

import useClickAway from '@/hooks/useClickAway';

interface ModalProps {
  width?: number;
  height?: number;
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({
  children,
  width = 500,
  height = 400,
  visible = false,
  onClose,
  ...props
}: ModalProps) => {
  const containerStyle = useMemo(() => ({ width, height }), [height, width]);
  const $root = useMemo(() => document.querySelector('body'), []);
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose && onClose();
  });

  return ReactDOM.createPortal(
    <S.ModalContainer style={{ display: visible ? 'block' : 'none' }}>
      <S.ModalInner ref={ref} {...props} style={{ ...containerStyle }}>
        {children}
      </S.ModalInner>
    </S.ModalContainer>,
    $root as Element,
  );
};

export default Modal;
