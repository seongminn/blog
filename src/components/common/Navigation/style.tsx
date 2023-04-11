import styled from '@emotion/styled';

import { breakpoints } from '@/constants/media';

export const Root = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  order: 2;

  @media (max-width: ${breakpoints.lg}) {
    transition: all 0.5s ease-in-out;

    display: ${props => (props.isOpen ? 'flex' : 'none')};
    width: 100%;

    order: 3;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & li {
    font-size: 16px;
    margin: 0 20px;
  }

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;

    margin-top: 20px;

    & li {
      margin: 10px 0;
      padding-left: 20px;

      /* TODO 추후, 해당 Link 주소에 위치할 경우에만 border left 띄워주기*/
      border-left: 2px solid black;
    }
  }
`;
