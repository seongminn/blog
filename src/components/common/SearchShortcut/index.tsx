import * as Styled from './style';

interface SearchShortcutProps {
  handleModalOpen: () => void;
}

const SearchShortcut = ({ handleModalOpen }: SearchShortcutProps) => {
  return (
    <Styled.SearchContainer onClick={handleModalOpen}>
      <Styled.SearchText>Search...</Styled.SearchText>
      <Styled.Shrotcut>⌘ K</Styled.Shrotcut>
    </Styled.SearchContainer>
  );
};

export default SearchShortcut;
