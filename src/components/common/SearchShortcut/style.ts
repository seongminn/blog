import styled from '@emotion/styled';

export const SearchContainer = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;

  padding: 8px 12px;

  border-radius: 4px;

  background-color: #eee;

  backdrop-filter: blur(10px);

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;

export const SearchText = styled.span`
  font-size: 14px;
`;

export const Shrotcut = styled.span`
  display: flex;

  background-color: #fff;

  font-size: 14px;
  border-radius: 4px;
  padding: 2px 4px;
`;
