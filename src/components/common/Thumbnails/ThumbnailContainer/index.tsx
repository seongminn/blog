import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

function ThumbnailContainer({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding-top: 120px;
  width: 100%;

  ${({ theme }) =>
    css`
      max-width: ${theme.layouts.maxWidth};
    `}
`;

export default ThumbnailContainer;
