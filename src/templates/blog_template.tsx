import { graphql } from 'gatsby';
import { useRef } from 'react';

import Blog from '@/components/blog';
import TOC from '@/components/blog/TOC';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
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
      <Blog>
        <Blog.Head
          title={title}
          category={category}
          date={date}
          publicURL={publicURL}
          divRef={divRef}
        />

        <Blog.Body html={html} tags={tags} />

        <TOC height={height} />
      </Blog>
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
