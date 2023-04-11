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
      <Styled.IconContainer>
        <Icon className="icon__search" iconName="search" color="black" />
        <Icon className="icon__menu" iconName="menu" color="black" />
      </Styled.IconContainer>
    </Styled.Root>
  );
}

export default Navigation;
