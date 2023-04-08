import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type GatsbyImageProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

type HeaderProps = {
  title: string;
  imageData: IGatsbyImageData;
};

function Header({ title, imageData }: HeaderProps) {
  return (
    <HeaderWrapper>
      <BackgroundImage image={imageData} alt={`${title} Image`} />
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.section`
  position: relative;
  max-width: 100vw;

  ${({ theme }) =>
    css`
      height: ${theme.layouts.headerHeight};
    `}
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;

  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${({ theme }) =>
    css`
      max-width: ${theme.layouts.maxWidth};
    `}
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.6px;
  line-height: 52px;
  margin-bottom: 45px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.white};
    `}
`;

// const HeaderDescription = styled.p`
//   font-size: 18px;
//   font-style: normal;
//   font-weight: normal;
//   letter-spacing: -0.2px;
//   line-height: 28px;
//   margin-bottom: 20px;

//   ${({ theme }) =>
//     css`
//       color: ${theme.colors.light_grey_200};
//     `}
// `;

// const HeaderBottomContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   margin-bottom: 60px;
// `;

// const HeaderCategories = styled.ul`
//   display: flex;
//   align-items: center;

//   font-size: 18px;
//   font-style: normal;
//   font-weight: normal;
//   letter-spacing: -0.2px;
// `;

// const CategoryList = styled.li`
//   border-radius: 5px;
//   padding: 2px 4px;
//   margin-right: 5px;

//   &:last-of-type {
//     margin-right: 0;
//   }

//   ${({ theme }) =>
//     css`
//       color: ${theme.colors.light_grey_200};
//     `};
// `;

// const HeaderDate = styled.time`
//   font-size: 18px;
//   font-style: normal;
//   font-weight: normal;
//   letter-spacing: -0.2px;

//   ${({ theme }) =>
//     css`
//       color: ${theme.colors.light_grey_200};
//     `}
// `;

const BackgroundImage = styled((props: GatsbyImageProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: brightness(0.25); */

  @media (max-width: 768px) {
    height: 300px;
  }
`;
