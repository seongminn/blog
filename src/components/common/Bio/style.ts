import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 40px;

  width: 100%;
  padding: 30px 20px 50px;
  place-self: center center;
`;

export const ProfileImage = styled.img`
  width: 100px;
  aspect-ratio: 1;

  border-radius: 50%;
`;

export const IntroductionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  font-weight: 600;
  font-size: 22px;
  font-variant-caps: all-petite-caps;
`;

export const Introduction = styled.p`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.grey_300};
  font-weight: 400;
  white-space: pre-line;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
