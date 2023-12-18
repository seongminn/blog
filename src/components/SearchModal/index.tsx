import { Fragment, forwardRef } from 'react';

import * as S from './style';
import Icon from '../common/Icon';
import SearchList from '../common/SearchList';

import useSearchKewords from '@/hooks/useSearchKewords';

const SearchModal = forwardRef<HTMLInputElement>((_, ref) => {
  const [searchKeywords, handleKeywordsChange, searchedPosts] =
    useSearchKewords();

  return (
    <Fragment>
      <S.Form>
        <Icon iconName="search" size="20" />
        <S.SearchInput
          ref={ref}
          value={searchKeywords}
          onChange={handleKeywordsChange}
          placeholder="Search Keywords"
        />
      </S.Form>
      <SearchList searchedData={searchedPosts} />
    </Fragment>
  );
});

export default SearchModal;
