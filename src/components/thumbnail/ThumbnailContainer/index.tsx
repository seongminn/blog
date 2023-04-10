import { useMemo } from 'react';

import * as Styled from './style';
import ThumbnailItem from '../ThumbnailItem';

import { CATEGORY_TYPE } from '@/constants/enum';
import { PostPageItemProps } from '@/types/PostItem.types';

type ThumbnailProps = {
  posts: PostPageItemProps[];
  count: number;
  category: string;
};

function ThumbnailContainer({ posts, count, category }: ThumbnailProps) {
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
        <ThumbnailItem key={node.frontmatter.title} node={node} />
      ))}
    </Styled.Root>
  );
}

export default ThumbnailContainer;
