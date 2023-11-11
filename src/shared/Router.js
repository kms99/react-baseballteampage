import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../components/Header/Header";
import { useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import GlobalFont from "../style/fonts";
import theme from "../theme";
import dummy from "../db/data.json";
import background from "../image/background.jpg";

const StWrapper = styled.div`
  position: relative;
  max-width: 120rem;
  min-width: 80rem;
  margin: auto;
  background: rgba(0, 0, 0, 0.9);
  height: auto;
  min-height: 100vh;
  padding-bottom: 1rem;
  font-family: "NotoSansKR";
  &::before {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    background: url(${background});
    background-position: center;
    background-size: cover;
  }
`;

const Router = () => {
  const [selectTeam, setSelectTeam] = useState(0);
  const [allComment, setAllComment] = useState(dummy);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFont />
        <StWrapper>
          <Header selectTeam={selectTeam} setSelectTeam={setSelectTeam}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    selectTeam={selectTeam}
                    setSelectTeam={setSelectTeam}
                    allComment={allComment}
                    setAllComment={setAllComment}
                  />
                }
              />
              <Route
                path="detail/:id"
                element={
                  <Detail
                    allComment={allComment}
                    setAllComment={setAllComment}
                  />
                }
              />
            </Routes>
          </Header>
        </StWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
