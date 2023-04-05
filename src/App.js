import styled from "styled-components";  
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 100%;
`
const Main = styled.div`
  flex:7;
  background-color: ${({theme}) => theme.bg};
  height: 90%;
`
const Wrapper = styled.div`
  padding: 22px 80px; //22px 96px
`

function App() {

  const [darMode, setDarkMode] = useState(true);
  const theme = darMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={darMode ? darkTheme : lightTheme}>  
      <Container>
        <BrowserRouter>
          <Menu darMode={darMode} setDarkMode={setDarkMode} />
          <Main theme={theme}>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;


