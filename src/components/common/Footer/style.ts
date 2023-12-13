import styled from '@emotion/styled';

export const Root = styled.footer`
  display: grid;
  position: relative;

  padding: 60px 0;

  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  place-items: center;

  min-width: 300px;

  @media (width <= 768px) {
    font-size: 13px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;

    width: 85px;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.light_grey_100};
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85px;
  margin-bottom: 30px;
`;
