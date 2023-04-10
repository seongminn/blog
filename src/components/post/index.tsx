import styled from '@emotion/styled';

type PostContentProps = {
  html: string;
};

function PostContainer({ html }: PostContentProps) {
  return <Container dangerouslySetInnerHTML={{ __html: html }} />;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export default PostContainer;
