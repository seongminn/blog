import { Link } from 'gatsby';

import * as Styled from './style';

function Navigation({ isOpen }: { isOpen: boolean }) {
  return (
    <Styled.Root isOpen={isOpen}>
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
