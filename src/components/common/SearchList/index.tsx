import * as S from './style';
import Icon from '../Icon';

import theme from '@/styles/theme';
import { PostPageItemProps } from '@/types/PostItem.types';

interface SearchListProps {
  searchedData: PostPageItemProps[];
}

const SearchList = ({ searchedData }: SearchListProps) => {
  return (
    <S.SearchListContainer>
      {searchedData?.map(data => {
        const { title } = data.node.frontmatter;

        return (
          <S.SearchListItem key={title}>
            <Icon
              iconName="hashtag"
              size="14"
              color={theme.colors.primary_darker}
            />
            <span>{title}</span>
          </S.SearchListItem>
        );
      })}
    </S.SearchListContainer>
  );
};

export default SearchList;
