import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';

import SEO from '@/components/common/SEO';
import Contents from '@/components/common/Thumbnails';
import { CATEGORY_TYPE } from '@/constants/enum';
import { INITIAL_COUNT } from '@/constants/initial';
import Layout from '@/layouts';
import { PostPageItemProps } from '@/types/PostItem.types';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostPageItemProps[];
    };
    file: {
      publicURL: string;
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  // location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: { publicURL },
  },
}) {
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        thumbnailSrc={publicURL}
        siteUrl={siteUrl}
      />
      <Contents
        posts={edges}
        category={CATEGORY_TYPE.ALL}
        count={INITIAL_COUNT}
      />
    </Layout>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
            category
            summary
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 170, height: 170)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "background" }) {
      publicURL
    }
  }
`;
