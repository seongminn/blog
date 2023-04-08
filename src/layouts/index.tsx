import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import Footer from '@/components/common/Footer';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
