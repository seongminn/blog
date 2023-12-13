import styled from '@emotion/styled';

export const Tags = styled.ul`
  display: flex;

  padding: 40px 0 80px;

  & li {
    padding-right: 16px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
  }
`;
