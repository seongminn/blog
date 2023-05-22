import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';

import CommentWidget from '@/components/blog/comment';
import Detail from '@/components/blog/detail';
import Image from '@/components/blog/header-img';
import Title from '@/components/blog/header-title';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
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
        thumbnail={publicURL}
        url={href}
      />
      <Title>{title}</Title>
      <p>{date}</p>
      <Image src={publicURL} />
      <Detail html={html} />
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
