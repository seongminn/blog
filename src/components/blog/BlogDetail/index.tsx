import * as Styled from './style';

interface BlogDetailProps {
  html: string;
}

const BlogDetail = ({ html }: BlogDetailProps) => {
  return (
    <Styled.Detail
      className="post"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogDetail;
