import styled from '@emotion/styled';
import { ReactNode } from 'react';

function Body({ children }: { children: ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>;
}

export default Body;

const BodyWrapper = styled.main`
  margin: 0 auto;
  max-width: 900px;
`;
