import styled from '@emotion/styled';

export const SearchListContainer = styled.ul`
  padding: 16px;

  width: 100%;
  height: calc(100% - 57px);

  overflow-x: hidden;
  overflow-y: auto;
`;

export const SearchListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 15px;

  border-radius: 5px;

  cursor: pointer;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;
