import { ThemeProvider } from '@emotion/react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactNode } from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

import SEO from '@/components/common/SEO';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

type LayoutProps = {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  imageData: IGatsbyImageData;
  date?: string;
  categories?: string[];
  children: ReactNode;
};

function Layout({
  title,
  description,
  imageUrl,
  siteUrl,
  imageData,
  date,
  categories,
  children,
}: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <SEO
        title={title}
        description={description}
        image={imageUrl}
        url={siteUrl}
      />
      <Header
        title={title}
        description={description}
        imageData={imageData}
        date={date}
        categories={categories}
      />
      <GlobalStyle />
      <Body>{children}</Body>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
