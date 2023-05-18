import styled from '@emotion/styled';

type PostContentProps = {
  html: string;
};

function BlogContainer({ html }: PostContentProps) {
  return <Blog dangerouslySetInnerHTML={{ __html: html }} />;
}

const Blog = styled.section`
  display: flex;
  flex-direction: column;

  // Renderer Style
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.layouts.maxWidth};
  margin: 0 auto;
  padding: 100px 30px;
  word-break: break-all;
`;

export default BlogContainer;
