import { ReactNode } from 'react';

import * as Styled from './style';

interface BlogContainerProps {
  children: ReactNode;
}

const BlogContainer = ({ children }: BlogContainerProps) => {
  return <Styled.BlogContainer>{children}</Styled.BlogContainer>;
};

export default BlogContainer;
