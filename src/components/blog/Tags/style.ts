import styled from '@emotion/styled';

export const Tags = styled.ul`
  display: flex;
  padding: 40px 0 80px;

  & li {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    padding-right: 16px;
  }
`;
