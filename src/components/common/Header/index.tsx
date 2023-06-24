import { useEffect, useMemo, useState } from 'react';

import * as Styled from './style';
import Gnb from '../Gnb';

import { throttle } from '@/utils/throttle';

function Header() {
  const [isHide, setIsHide] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY);

  const onScroll = () => {
    const pageYoffset = window.scrollY;
    const deltaY = pageYoffset - scroll;
    const hide = pageYoffset !== 0 && deltaY >= 1;

    setIsHide(hide);
    setScroll(pageYoffset);
  };

  const throttled = useMemo(() => throttle(onScroll, 250), [scroll]);

  useEffect(() => {
    window.addEventListener('scroll', throttled, { passive: true });
    return () => {
      window.addEventListener('scroll', throttled, { passive: true });
    };
  }, [scroll]);

  return (
    <Styled.Root isHide={isHide}>
      <Styled.Container>
        <Styled.Logo to="/">seongminn.dev</Styled.Logo>

        <Gnb />
      </Styled.Container>
    </Styled.Root>
  );
}

export default Header;
