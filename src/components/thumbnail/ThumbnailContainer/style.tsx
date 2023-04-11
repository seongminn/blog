import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 120px 30px 0;
  width: 100%;

  ${({ theme }) =>
    css`
      max-width: ${theme.layouts.maxWidth};
    `}
`;
