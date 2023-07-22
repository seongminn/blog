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
        <Styled.SearchButton aria-label="Search">
          <Icon iconName="search" />
        </Styled.SearchButton>
        <Styled.MenuButton aria-label="Menu">
          <Icon iconName="menu" />
        </Styled.MenuButton>
      </Styled.IconContainer>
    </Styled.Root>
  );
}

export default Gnb;
