import { useMemo } from 'react';

import ThumbnailContainer from './ThumbnailContainer';
import ThumbnailItem from './ThumbnailItem';

import { CATEGORY_TYPE } from '@/constants/enum';
import { PostPageItemProps } from '@/types/PostItem.types';

type ContentsType = {
  posts: PostPageItemProps[];
  count: number;
  category: string;
};

function Contents({ posts, count, category }: ContentsType) {
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
    <ThumbnailContainer>
      {refinedPosts.map(({ node }) => (
        <ThumbnailItem key={node.frontmatter.title} node={node} />
      ))}
    </ThumbnailContainer>
  );
}

export default Contents;
