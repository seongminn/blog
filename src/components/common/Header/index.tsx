import styled from '@emotion/styled';

import Navigation from './Navigation';

function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
  max-width: 100vw;
`;
