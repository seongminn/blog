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

  & div {
    margin-left: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  & .icon__menu {
    display: block;

    ${({ theme }) => css`
      ${theme.mq.tablet} {
        display: none;
      }
    `}
  }
`;
