import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '@/constants/media';

export const Root = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 84px;
  padding: 20px 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  z-index: 999;
  transition: all 0.25s ease-in-out;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white};
      box-shadow: ${theme.colors.shadow};
    `}

  @media (max-width: ${breakpoints.lg}) {
    min-height: 72px;
    height: auto;
  }

  @media (max-width: ${breakpoints.sm}) {
    min-height: 60px;
    height: auto;
  }
`;

export const Logo = styled(Link)`
  flex-basis: 0;
  flex-grow: 0;
  flex-shrink: 0;

  order: 0;

  font-family: 'Blinker';
  font-size: 32px;
  font-weight: bold;

  @media (max-width: ${breakpoints.lg}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 24px;
  }
`;

export const Space = styled.div`
  flex-basis: 0;
  flex-grow: 50;
  flex-shrink: 0;

  width: 100%;
  background-color: transparent;

  order: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  order: 3;

  & div {
    margin-left: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    order: 2;
  }

  & .icon__menu {
    display: none;

    @media (max-width: ${breakpoints.lg}) {
      display: block;
    }
  }
`;
