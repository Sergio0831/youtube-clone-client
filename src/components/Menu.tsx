import styled from 'styled-components';
import CloneTube from '../img/logo.png';
import MenuItems from './MenuItems';

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={CloneTube} alt='Logo' />
          CloneTube
        </Logo>
        <MenuItems />
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.menu`
  flex: 2;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-style: 1px;
  font-size: 1.4rem;
  position: sticky;
  top: 0;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  &:hover {
    scrollbar-color: ${({ theme }) => theme.textSoft} transparent;
  }
`;

const Wrapper = styled.div`
  padding: 1.8rem 1.6rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-left: 1rem;

  img {
    height: 2.5rem;
  }
`;
