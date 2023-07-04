import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Root = styled.header<{ isHide: boolean }>`
  width: 100%;
  height: 65px;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;

  z-index: 999;
  transform: translateY(0%);
  transition: transform 0.3s;

  ${({ theme, isHide: isHide }) =>
    css`
      transform: ${isHide && 'translateY(-100%)'};
      background-color: ${theme.colors.white};
      box-shadow: ${theme.colors.shadow};
    `};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  margin: 0 auto;
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

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      font-size: 24px;
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
    display: none;
  }
`;
