import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Root = styled.nav`
  width: 100%;
  height: 84px;
  padding: 20px 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 999;
  transition: all 0.25s ease-in-out;

  ${({ theme }) =>
    css`
      box-shadow: ${theme.colors.shadow};
    `}
`;

export const Logo = styled(Link)`
  font-family: 'Blinker';
  font-size: 32px;
  font-weight: bold;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & li {
    font-size: 16px;
    margin: 0 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const NavItem = styled.li``;
