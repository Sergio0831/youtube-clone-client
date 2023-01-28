import styled from 'styled-components';
import SignInButton from './ui/SignInButton';
import SearchedOutlined from '@mui/icons-material/SearchOutlined';

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchForm>
          <input type='text' placeholder='Search' />
          <SearchButton type='submit'>
            <SearchedOutlined />
          </SearchButton>
          <Tooltip>Search</Tooltip>
        </SearchForm>
        <SignInButton />
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 5.6rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  height: 100%;
  padding: 0 2rem;

  button {
    justify-self: flex-end;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 40%;
  height: 3.5rem;
  position: relative;

  input {
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    border: none;
    width: 100%;
    padding: 5px 1rem 5px 1rem;
    border: 1px solid ${({ theme }) => theme.searchButton};
    outline: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;

    &:focus {
      border-color: #3ea6ff;
    }
  }
`;

const Tooltip = styled.div`
  display: block;
  position: absolute;
  outline: none;
  z-index: 100;
  user-select: none;
  cursor: default;
  right: -8px;
  top: 4rem;
  background-color: ${({ theme }) => theme.searchButton};
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  font-size: 1.2rem;
  opacity: 0;
  visibility: 0;
  transition: ease 100ms;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.searchButton};
  border: none;
  cursor: pointer;
  padding: 0 9px 0 9px;
  outline: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid transparent;

  &:hover ~ ${Tooltip}, &:focus ~ ${Tooltip} {
    opacity: 1;
    visibility: 1;
  }

  svg {
    fill: #f1f1f1;
    width: 2rem;
    height: 2rem;
  }
`;
