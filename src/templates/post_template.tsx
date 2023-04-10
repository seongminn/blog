import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';

import SEO from '@/components/common/SEO';
import PostContainer from '@/components/post';
import CommentWidget from '@/components/post-fix/CommentWidget';
import Layout from '@/layouts';
import { PostPageItemProps } from '@/types/PostItem.types';

type PostTemplateProps = {
  location: { href: string };
  data: {
    allMarkdownRemark: {
      edges: PostPageItemProps[];
    };
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  location: { href },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        category,
        thumbnail: { publicURL },
      },
    },
  } = edges[0];
  return (
    <Layout>
      <SEO
        title={title}
        description={summary}
        thumbnailSrc={publicURL}
        siteUrl={href}
      />
      <PostContainer html={html} />
      <CommentWidget />
    </Layout>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            category
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
