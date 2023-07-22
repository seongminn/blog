import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 20px 50px;

  display: grid;
  grid-template-columns: 100px auto;
  justify-self: center;
  align-self: center;
  gap: 40px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  aspect-ratio: 1;

  border-radius: 50%;
`;

export const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-variant-caps: all-petite-caps;

  color: ${({ theme }) => theme.colors.grey_400};
`;

export const Introduction = styled.p`
  font-weight: 400;
  white-space: pre-line;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.grey_300};
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
