import { Link } from 'gatsby';

import * as Styled from './style';

function Navigation() {
  return (
    <Styled.Root>
      <Styled.Logo to="/">seongminn.dev</Styled.Logo>
      <Styled.NavItems>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </Styled.NavItems>
    </Styled.Root>
  );
}

export default Navigation;
