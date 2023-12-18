import { useMemo, useRef } from 'react';

import * as Styled from './style';
import Gnb from '../Gnb';
import Modal from '../Modal';
import SearchShortcut from '../SearchShortcut';

import SearchModal from '@/components/SearchModal';
import useHotKeys, { Hotkeys } from '@/hooks/useHotKeys';
import useModal from '@/hooks/useModal';
import useScroll from '@/hooks/useScroll';

function Header() {
  const [isOpen, toggle, setModalOpen] = useModal();
  const searchRef = useRef<HTMLInputElement>(null);
  const isHide = useScroll();
  const hotkeys: Hotkeys[] = useMemo(
    () => [
      {
        combo: 'ctrl+shift+k',
        onKeyUp: () => {
          toggle();
        },
        onKeyDown: () => {
          //
        },
      },
      {
        combo: 'esc',
        onKeyUp: () => {
          setModalOpen(false);
        },
        onKeyDown: () => {
          // ...
        },
      },
    ],
    [],
  );
  useHotKeys(hotkeys);

  return (
    <Styled.Root isHide={isHide}>
      <Styled.Container>
        <Styled.Logo to="/">seongminn.dev</Styled.Logo>

        <Styled.Navbar>
          <Gnb />
          <SearchShortcut handleModalOpen={toggle} />
        </Styled.Navbar>
      </Styled.Container>
      <Modal visible={isOpen} onClose={() => setModalOpen(false)}>
        <SearchModal ref={searchRef} />
      </Modal>
    </Styled.Root>
  );
}

export default Header;
