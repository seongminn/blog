import * as Styled from './style';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <Styled.Tags>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </Styled.Tags>
  );
};

export default Tags;
