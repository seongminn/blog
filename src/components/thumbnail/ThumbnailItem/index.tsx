import { GatsbyImage } from 'gatsby-plugin-image';

import * as Styled from './style';

import { PostFrontmatterType } from '@/types/PostItem.types';

type ThumbnailItemProps = {
  html: string;
  id: string;
  fields: { slug: string };
  frontmatter: PostFrontmatterType;
};

function ThumbnailItem({ node }: { node: ThumbnailItemProps }) {
  const { title, summary, date, thumbnail, tags } = node.frontmatter;
  const { gatsbyImageData } = thumbnail.childImageSharp;
  const { slug } = node.fields;

  return (
    <Styled.Root to={slug} key={slug}>
      <GatsbyImage
        image={gatsbyImageData}
        alt={slug}
        style={{ isolation: 'isolate', borderRadius: '3px' }}
      />
      <Styled.InfoContainer>
        <Styled.TagItems>
          {tags.map(tag => (
            <li key={title + tag}>{tag}</li>
          ))}
        </Styled.TagItems>
        <Styled.Title className="title">{title || slug}</Styled.Title>
        <Styled.Description
          className="description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <Styled.Time>{date}</Styled.Time>
      </Styled.InfoContainer>
    </Styled.Root>
  );
}

export default ThumbnailItem;
