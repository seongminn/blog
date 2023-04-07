import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import Footer from '@/components/common/Footer';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BodyWrapper>{children}</BodyWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

const BodyWrapper = styled.main`
  margin: 0 auto;
  max-width: 900px;
`;
