import { graphql } from 'gatsby';
import { useRef } from 'react';

import BlogContainer from '@/components/blog/BlogContainer';
import BlogDetail from '@/components/blog/BlogDetail';
import BlogHead from '@/components/blog/BlogHead';
import Comment from '@/components/blog/Comment/inex';
import Tags from '@/components/blog/Tags';
import TOC from '@/components/blog/TOC';
import Bio from '@/components/common/Bio';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import useComment from '@/hooks/useComment';
import useItemHeight from '@/hooks/useHeight';
import { PostPageItemProps } from '@/types/PostItem.types';

type PostTemplateProps = {
  location: { href: string };
  data: {
    allMarkdownRemark: {
      edges: PostPageItemProps[];
    };
  };
};

const PostTemplate = (props: PostTemplateProps) => {
  const { data, location } = props;
  const { href } = location;
  const { html, frontmatter } = data.allMarkdownRemark.edges[0].node;
  const { category, date, summary, title, thumbnail, tags } = frontmatter;
  const { publicURL } = thumbnail;

  const { commentRef } = useComment();

  const divRef = useRef<HTMLDivElement>(null);
  const height = useItemHeight(divRef);

  return (
    <Layout>
      <SEO
        title={title}
        description={summary}
        thumbnail={publicURL}
        url={href}
      />

      <BlogHead
        title={title}
        category={category}
        date={date}
        publicURL={publicURL}
        divRef={divRef}
      />

      <BlogContainer>
        <BlogDetail html={html} />
        <hr />
        <Bio />
        <Tags tags={tags} />
        <TOC height={height} />
      </BlogContainer>
      <Comment commentRef={commentRef} />
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
            tags
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
