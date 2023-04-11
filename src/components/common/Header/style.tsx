import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '@/constants/media';

export const Root = styled.header`
  position: relative;
  width: 100%;
  height: 84px;
  padding: 20px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 999;
  transition: all 0.25s ease-in-out;

  ${({ theme }) =>
    css`
      box-shadow: ${theme.colors.shadow};
    `}

  @media (max-width: ${breakpoints.lg}) {
    height: 72px;
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 60px;
  }
`;

export const Logo = styled(Link)`
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
