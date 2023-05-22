// import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

function SEO({ title, description, thumbnail: thumbnailSrc, url }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailSrc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnailSrc} />
      <meta name="twitter:site" content="@seongminn" />
      <meta name="twitter:creator" content="@seongminn" />

      <html lang="ko" />
    </Helmet>
  );
}

export default SEO;
