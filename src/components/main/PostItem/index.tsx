import { Link } from 'gatsby';

import * as Styled from './style';

import { PostFrontmatterType } from '@/types/PostItem.types';

type PostItemProps = {
  html: string;
  id: string;
  fields: { slug: string };
  frontmatter: PostFrontmatterType;
};

function PostItem({ node }: { node: PostItemProps }) {
  const { title, summary, date, thumbnail, tags } = node.frontmatter;
  const { gatsbyImageData } = thumbnail.childImageSharp;
  const { slug } = node.fields;

  return (
    <Styled.Root key={slug}>
      <Link to={slug}>
        <Styled.Thumbnail image={gatsbyImageData} alt={slug} />
        <Styled.InfoContainer>
          <Styled.TagItems>
            {tags.map(tag => (
              <li key={title + tag}>{tag}</li>
            ))}
          </Styled.TagItems>
          <Styled.Title>{title || slug}</Styled.Title>
          <Styled.Description dangerouslySetInnerHTML={{ __html: summary }} />
          <Styled.Time>{date}</Styled.Time>
        </Styled.InfoContainer>
      </Link>
    </Styled.Root>
  );
}

export default PostItem;
