// import { graphql } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { SEOType } from '@/types/PostItem.types';

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
  return (
    <StaticQuery
      query={seoQuery}
      render={(data: SEOType) => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        return (
          <Helmet
            title={title}
            htmlAttributes={{ lang }}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <meta name="description" content={metaDescription} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
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

            {keywords.length > 0 ? (
              <meta name="keywords" content={keywords.join(', ')} />
            ) : (
              []
            )}
          </Helmet>
        );
      }}
    ></StaticQuery>
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
