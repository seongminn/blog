import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '@/constants/media';

export const Root = styled.header<{ isStart: boolean }>`
  position: fixed;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  z-index: 999;
  transition: all 0.25s ease-in-out;

  ${({ theme, isStart }) =>
    css`
      background-color: ${theme.colors.white};
      box-shadow: ${isStart ? 'none' : theme.colors.shadow};
      padding: ${isStart ? '30px 0' : '20px 0'};
    `};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-family: 'Blinker';
  font-size: 32px;
  font-weight: bold;

  ${({ theme }) => css`
    background-image: ${theme.colors.primary_gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  @media (max-width: ${breakpoints.lg}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 24px;
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
