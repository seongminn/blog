import styled from '@emotion/styled';

export const Root = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin: 0 auto;
  padding: 120px 30px 100px;

  max-width: ${({ theme }) => theme.layouts.maxWidth};
  min-width: 300px;
`;
