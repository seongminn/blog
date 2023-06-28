import styled from '@emotion/styled';

interface TOCProps {
  contents: string | TrustedHTML;
}

const TOC = (props: TOCProps) => {
  const { contents } = props;

  return <Styled.Contents dangerouslySetInnerHTML={{ __html: contents }} />;
};

export default TOC;

const Styled = {
  Contents: styled.nav`
    position: sticky;
    top: 100px;

    ul,
    li,
    p,
    a {
      display: block;
    }

    & ul ul {
      margin-left: 10px;
    }

    & ul > li > p,
    & ul > li > a {
      position: relative;
      display: block;
      font-size: 15px;
      padding-left: 10px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.grey_100};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;
      transition: all 30ms ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }

      &.isActive {
        color: ${({ theme }) => theme.colors.black};

        border-left: 20px solid;
        border-image: ${({ theme }) => theme.colors.primary_gradient};

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 2px;
          height: 50%;
          background: ${({ theme }) => theme.colors.primary_gradient};
          transform: translateY(-50%);
        }
      }
    }
  `,
};
