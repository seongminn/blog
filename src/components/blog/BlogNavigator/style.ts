import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const List = styled.li`
  width: 100%;

  border: 1px solid black;
`;
