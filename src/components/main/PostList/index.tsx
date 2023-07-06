import { useMemo } from 'react';

import * as Styled from './style';

import PostItem from '@/components/main/PostItem';
import { CATEGORY_TYPE } from '@/constants/enum';
import { PostPageItemProps } from '@/types/PostItem.types';

type PostListProps = {
  posts: PostPageItemProps[];
  count: number;
  category: string;
};

function PostList({ posts, count, category }: PostListProps) {
  const refinedPosts = useMemo(
    () =>
      posts
        .filter(
          ({ node }) =>
            category === CATEGORY_TYPE.ALL ||
            node.frontmatter.category === category,
        )
        .slice(0, count),
    [category, count],
  );

  return (
    <Styled.Root>
      {refinedPosts.map(({ node }) => (
        <PostItem key={node.frontmatter.title} node={node} />
      ))}
    </Styled.Root>
  );
}

export default PostList;
