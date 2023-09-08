import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { SEOType } from '@/types/SEO.types';

type SeoProps = {
  title: string;
  lang?: string;
  description?: string;
  url?: string;
  keywords?: string[];
  thumbnail?: string;
};

function SEO({
  title,
  lang = 'ko',
  description,
  url,
  keywords = [],
  thumbnail: thumbnailSrc,
}: SeoProps) {
  const data: SEOType = useStaticQuery(seoQuery);

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={thumbnailSrc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={thumbnailSrc} />
      <meta name="twitter:site" content="@seongminn" />
      <meta name="twitter:creator" content="@seongminn" />

      <html lang="ko" />
      <meta
        name="google-site-verification"
        content="vX76SDDeFGifDuC6zsHiTeHZpsCU0wjk9smK5JC9qlw"
      />
      <meta
        name="naver-site-verification"
        content="9a51f0d5f728fa881fd62927cc616647be684cb7"
      />

      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(', ')} />
      ) : (
        []
      )}
    </Helmet>
  );
}

const seoQuery = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default SEO;
