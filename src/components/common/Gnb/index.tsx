import { Link } from 'gatsby';

import * as Styled from './style';

import Icon from '@/components/common/Icon';

function Gnb() {
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
        <Icon
          className="icon__search"
          iconName="search"
          color="black"
          aria-label="Search"
        />
        <Icon
          className="icon__menu"
          iconName="menu"
          color="black"
          aria-label="Menu"
        />
      </Styled.IconContainer>
    </Styled.Root>
  );
}

export default Gnb;
