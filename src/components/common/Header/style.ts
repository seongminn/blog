import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Root = styled.header<{ isHide: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 65px;

  position: fixed;
  inset: 0;

  z-index: 10;

  transform: translateY(0%);
  transition: transform 0.3s;

  ${({ theme, isHide: isHide }) =>
    css`
      background-color: ${theme.colors.white};

      transform: ${isHide && 'translateY(-100%)'};
      box-shadow: ${theme.colors.shadow};
    `};
`;

export const Container = styled.div`
  display: flex;

  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
`;

export const Logo = styled(Link)`
  flex: 1;

  font-family: Blinker;

  font-size: 26px;
  font-weight: bold;

  ${({ theme }) => css`
    background-image: ${theme.colors.primary_gradient};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
`;
