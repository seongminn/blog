import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-right: 40px;
`;

export const Detail = styled.div`
  &,
  p > img {
    // Renderer Style
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.layouts.maxWidth};
    width: 100%;
    word-break: break-all;

    padding: 0 0 80px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  padding: 40px 0 80px;

  & li {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    padding-right: 16px;
  }
`;

export const Comment = styled.div`
  width: 100%;
  margin: 0 0 100px 0;

  .utterances {
    min-width: 100%;
    margin: 0;
  }

  .timeline {
    padding: 0px;
  }
`;
