import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  ${({ theme }) =>
    css`
      max-width: ${theme.layouts.maxWidth};
    `}
`;
