import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import Template from '@/components/common/Template';
import CommentWidget from '@/components/post/CommentWidget';
import PostContent from '@/components/post/PostContent';
import PostHead from '@/components/post/PostHead';
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
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];
  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
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
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
