import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItems = styled.ul`
  display: none;

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      display: flex;
      justify-content: space-around;
      align-items: center;

      & li {
        font-size: 16px;
        margin: 0 20px;
      }
    }
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  margin-left: 20px;
`;

export const MenuButton = styled.button`
  margin-right: 0;
  display: block;

  ${({ theme }) => css`${theme.mq.mobile} {
    display: none;
  `}
`;
