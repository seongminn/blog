import styled from '@emotion/styled';

export const Root = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 120px 30px 100px;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.layouts.maxWidth};
  min-width: 300px;
`;
