import { graphql, useStaticQuery } from 'gatsby';
import { ChangeEvent, useCallback, useState } from 'react';

import useDebounce from './useDebounce';

import { PostPageItemProps } from '@/types/PostItem.types';
import { includesString } from '@/utils/parser';

interface ISearchPost {
  allMarkdownRemark: {
    edges: PostPageItemProps[];
  };
}

const useSearchKewords = () => {
  const [state, setState] = useState<string>('');
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  const debouncedState = useDebounce<string>(state, 500);
  const debouncedStateTrimmed = debouncedState.replace(' ', '').toLowerCase();

  const data: ISearchPost = useStaticQuery(postsQuery);
  const posts = data.allMarkdownRemark.edges || [];

  const searchedData = posts.filter(post => {
    const { title, summary, tags } = post.node.frontmatter;

    if (!debouncedStateTrimmed) {
      return false;
    }

    return (
      includesString(summary, debouncedStateTrimmed) ||
      includesString(title, debouncedStateTrimmed) ||
      tags.some(tag =>
        includesString(tag.replace('# ', ''), debouncedStateTrimmed),
      )
    );
  });

  return [state, onChange, searchedData] as const;
};

export default useSearchKewords;

const postsQuery = graphql`
  query {
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
  }
`;
