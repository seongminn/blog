import { Link } from 'gatsby';

import * as Styled from './style';

function Gnb() {
  return (
    <Styled.NavItems>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
    </Styled.NavItems>
  );
}

export default Gnb;
