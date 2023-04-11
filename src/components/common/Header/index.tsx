import * as Styled from './style';
import Navigation from '../Navigation';

function Header() {
  return (
    <Styled.Root>
      <Styled.Logo to="/">seongminn.dev</Styled.Logo>

      <Navigation />
    </Styled.Root>
  );
}

export default Header;
