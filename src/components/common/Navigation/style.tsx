import styled from '@emotion/styled';

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
`;
