import { Link } from 'gatsby';

import * as Styled from './style';
import Icon from '../Icon';

function Navigation() {
  return (
    <Styled.Root>
      <Styled.NavItems>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </Styled.NavItems>
      <Icon iconName="magnifier" color="black" style={{ marginLeft: '20px' }} />
    </Styled.Root>
  );
}

export default Navigation;
