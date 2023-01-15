import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, NavBar } from './components';
import { lightTheme } from './utils/Theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
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

