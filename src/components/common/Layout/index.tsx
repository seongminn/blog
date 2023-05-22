import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Root>
        <Header />
        <GlobalStyle />
        <Styled.Container>{children}</Styled.Container>
        <Footer />
      </Styled.Root>
    </ThemeProvider>
  );
}

export default Layout;

const Styled = {
  Root: styled.div`
    width: 100%;
  `,
  Container: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 120px 30px 0;
    margin: 0 auto;

    max-width: ${({ theme }) => theme.layouts.maxWidth};
    min-width: 300px;
  `,
};
