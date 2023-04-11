import { useState } from 'react';

import * as Styled from './style';
import Navigation from '../Navigation';

import Icon from '@/components/common/Icon';

function Header() {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  return (
    <Styled.Root>
      <Styled.Logo to="/">seongminn.dev</Styled.Logo>

      <Styled.Space />
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
          onClick={() => toggleOpen(!isOpen)}
        />
      </Styled.IconContainer>
      <Navigation isOpen={isOpen} />
    </Styled.Root>
  );
}

export default Header;
