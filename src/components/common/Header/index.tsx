import { useEffect, useState } from 'react';

import * as Styled from './style';
import Navigation from '../Navigation';

import theme from '@/styles/theme';

function Header() {
  const [isStart, setIsStart] = useState<boolean>(true);

  useEffect(() => {
    const height = parseInt(theme.layouts.headerHeight);

    window.addEventListener('scroll', () =>
      setIsStart(window.scrollY < height),
    );
    return () => {
      window.addEventListener('scroll', () =>
        setIsStart(window.scrollY < height),
      );
    };
  }, []);

  return (
    <Styled.Root isStart={isStart}>
      <Styled.Container>
        <Styled.Logo to="/">seongminn.dev</Styled.Logo>

        <Navigation />
      </Styled.Container>
    </Styled.Root>
  );
}

export default Header;
