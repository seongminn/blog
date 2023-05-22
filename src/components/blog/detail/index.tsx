import styled from '@emotion/styled';

type PostContentProps = {
  html: string;
};

function Detail({ html }: PostContentProps) {
  return <DetailContainer dangerouslySetInnerHTML={{ __html: html }} />;
}

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;

  // Renderer Style
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  margin: 0 auto;
  padding: 100px 30px;
  word-break: break-all;
`;

export default Detail;
