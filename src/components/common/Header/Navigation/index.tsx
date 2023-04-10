import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

function Navigation() {
  return (
    <NavWrapper>
      <Logo to="/">seongminn.dev</Logo>
      <NavList>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/post">Post</Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
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

const Logo = styled(Link)`
  font-family: 'Blinker';
  font-size: 32px;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 16px;
  margin: 0 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default Navigation;
