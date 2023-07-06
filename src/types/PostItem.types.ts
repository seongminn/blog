import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PostFrontmatterType = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export type PostPageItemProps = {
  node: {
    html: string;
    id: string;
    fields: { slug: string };
    frontmatter: PostFrontmatterType;
  };
};

export type SEOType = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};
