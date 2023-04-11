import styled from '@emotion/styled';

import { breakpoints } from '@/constants/media';

export const Root = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & li {
    font-size: 16px;
    margin: 0 20px;
  }

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-left: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  & .icon__menu {
    display: none;

    @media (max-width: ${breakpoints.lg}) {
      display: block;
    }
  }
`;
