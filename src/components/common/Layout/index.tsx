import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import * as Styled from './style';

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
