import styled from '@emotion/styled';

export const Root = styled.footer`
  position: relative;

  display: grid;
  place-items: center;

  min-width: 300px;
  padding: 60px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
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
  width: 85px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
`;
