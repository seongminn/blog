import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
    <ThumbnailWrapper to={slug} key={slug}>
      <GatsbyImage
        image={gatsbyImageData}
        alt={slug}
        style={{ isolation: 'isolate', borderRadius: '3px' }}
      />
      <ThumbnailInfo>
        <TagList style={{ display: 'flex', marginBottom: '15px' }}>
          {tags.map(tag => (
            <TagItem key={title + tag}>{tag}</TagItem>
          ))}
        </TagList>
        <Title className="title">{title || slug}</Title>
        <Description
          className="description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <Time>{date}</Time>
      </ThumbnailInfo>
    </ThumbnailWrapper>
  );
}

const ThumbnailWrapper = styled(Link)`
  position: relative;
  display: grid;
  grid-template-columns: 170px auto;
  align-items: center;

  margin-bottom: 120px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateX(10px);
  }
`;

const ThumbnailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
`;

const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -0.2px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-size: 15px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.1px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.grey_400};
    `}
`;

const Time = styled.time`
  font-size: 15px;
  margin-top: 15px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.grey_400};
    `}
`;

const TagList = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

const TagItem = styled.li`
  font-size: 15px;
  margin-right: 15px;

  ${({ theme }) => css`
    background-image: ${theme.colors.primary_gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export default ThumbnailItem;
