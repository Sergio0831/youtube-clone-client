import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from './app/hooks';
import { Menu, NavBar } from './components';
import { lightTheme, darkTheme } from './features/theme/Theme';

const App = () => {
  const theme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
        <Menu />
        <Main>
          <NavBar />
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 8;
  background-color: ${(props) => props.theme.bg};
`;

const Wrapper = styled.div``;

