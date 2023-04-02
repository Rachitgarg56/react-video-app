import styled from "styled-components";  
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './utils/Theme'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex:7;
  background-color: yellow;//#181818
`
const Wrapper = styled.div`
  padding: 22px 80px; //22px 96px
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <BrowserRouter>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
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


