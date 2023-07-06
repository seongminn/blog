import styled from '@emotion/styled';

const SectionTitle = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 50px;

  color: ${({ theme }) => theme.colors.grey_200};
`;

export default SectionTitle;
