import styled from 'styled-components';
import { Menu, NavBar } from './components';

const App = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <NavBar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 8;
`;

const Wrapper = styled.div``;

