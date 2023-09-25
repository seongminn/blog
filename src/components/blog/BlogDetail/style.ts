import styled from '@emotion/styled';

export const Detail = styled.div`
  &,
  p > img {
    // Renderer Style
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.layouts.maxWidth};
    width: 100%;
    word-break: break-all;

    padding: 0 0 50px;
  }
`;
