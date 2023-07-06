import { LegacyRef } from 'react';

import * as Styled from './style';

interface HeadProps {
  title: string;
  category: string;
  date: string;
  publicURL: string;
  divRef: LegacyRef<HTMLDivElement>;
}

const Head = (props: HeadProps) => {
  const { title, category, date, publicURL, divRef: ref } = props;

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.InfoArea>
        <span className="category">{category}</span>
        <span className="date">{date}</span>
      </Styled.InfoArea>
      <Styled.Image src={publicURL} />
    </Styled.Wrapper>
  );
};

export default Head;
