import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';

import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import PostList from '@/components/post-list/PostList';
import { CATEGORY_TYPE } from '@/constants/enum';
import { INITIAL_COUNT } from '@/constants/initial';
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

      <Styled.Root>
        <Styled.Title>새로운 게시물을 확인해보세요 ✨</Styled.Title>

        <PostList
          posts={edges}
          category={CATEGORY_TYPE.ALL}
          count={INITIAL_COUNT}
        />
      </Styled.Root>
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

const Styled = {
  Root: styled.section`
    margin: 0 auto;
    padding: 80px 30px 0;
  `,
  Title: styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 50px;

    color: ${({ theme }) => theme.colors.grey_200};
  `,
  Separator: styled.hr`
    height: 2px;
    width: 85px;
    margin: 0 0 60px 0;

    background-color: ${({ theme }) => theme.colors.light_grey_100};
    border: 0;
  `,
};
