import { RefObject } from 'react';

import * as Styled from './style';

interface CommentProps {
  commentRef: RefObject<HTMLDivElement>;
}

const Comment = ({ commentRef }: CommentProps) => {
  return <Styled.Comment ref={commentRef} />;
};

export default Comment;
