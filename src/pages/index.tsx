import { graphql } from 'gatsby';

import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import PostList from '@/components/main/post-list';
import SectionTitle from '@/components/main/title';
import { CATEGORY_TYPE } from '@/constants/enum';
import { INITIAL_COUNT } from '@/constants/initial';
import { MAIN_TITLE } from '@/constants/meta';
import { PostPageItemProps } from '@/types/PostItem.types';

type MainPageProps = {
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

const MainPage = (props: MainPageProps) => {
  const { site, allMarkdownRemark, file } = props.data;
  const { description, siteUrl } = site.siteMetadata;
  const posts = allMarkdownRemark.edges;
  const { publicURL } = file;

  return (
    <Layout>
      <SEO
        title={MAIN_TITLE}
        description={description}
        thumbnail={publicURL}
        url={siteUrl}
      />

      <SectionTitle>새로운 게시물을 확인해보세요 ✨</SectionTitle>

      <PostList
        posts={posts}
        category={CATEGORY_TYPE.ALL}
        count={INITIAL_COUNT}
      />
    </Layout>
  );
};

export default MainPage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
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
