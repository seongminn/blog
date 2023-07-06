import * as Styled from './style';

import useComment from '@/hooks/useComment';

interface BodyProps {
  html: string;
  tags: string[];
}

const Body = (props: BodyProps) => {
  const { html, tags } = props;

  const { commentRef } = useComment();

  return (
    <Styled.Wrapper>
      <Styled.Detail
        className="post"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <hr />

      <Styled.Tags>
        {tags.map(tag => (
          <li>{tag}</li>
        ))}
      </Styled.Tags>

      <Styled.Comment ref={commentRef} />
    </Styled.Wrapper>
  );
};

export default Body;
