import { ThemeProvider, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import SEO from '@/components/common/SEO';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <NotFoundWrapper>
        <SEO title="404: Not Found" />
        <GlobalStyle />

        <p className="error">404 NOT FOUND!</p>
        <h1 className="title">길을 잃어버리셨나요?</h1>
        <span className="description">
          이 페이지는 존재하지 않는 페이지예요. <br />
          새로운 길을 찾아보아요!
        </span>
        <Link to="/" className="button">
          메인으로 가기
        </Link>
      </NotFoundWrapper>
    </ThemeProvider>
  );
};

const NotFoundWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: 700;
    font-size: 26px;

    margin-bottom: 30px;

    ${({ theme }) => css`
      ${theme.mq.mobile} {
        font-size: 36px;
      }
    `}
  }

  .error {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;

    ${({ theme }) => css`
      background-image: ${theme.colors.primary_gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}

    ${({ theme }) => css`
      ${theme.mq.mobile} {
        font-size: 16px;
      }
    `}
  }

  .description {
    font-size: 14px;
    margin-bottom: 50px;

    ${({ theme }) => css`
      ${theme.mq.mobile} {
        font-size: 16px;
      }
    `}
  }

  .button {
    font-size: 14px;
    padding: 0.7rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;

    ${({ theme }) => css`
      ${theme.mq.mobile} {
        font-size: 16px;
        padding: 0.8rem 1.5rem;
      }
    `}
  }
`;

export default NotFoundPage;
