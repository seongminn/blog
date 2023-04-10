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
      <Styled.Anchor target="_blank" href="https://github.com/seongminn">
        <Icon iconName="github" />
      </Styled.Anchor>
    </Styled.Root>
  );
}

export default Navigation;
