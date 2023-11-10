import react, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { styled, ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import GlobalFont from "./style/fonts";
import theme from "./theme";

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
`;
function App() {
  const [selectTeam, setSelectTeam] = useState(0);

  useEffect(() => {
    console.log(selectTeam);
  }, [selectTeam]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <StWrapper>
        <Header selectTeam={selectTeam} onSelectTeams={setSelectTeam} />
        <Main selectTeam={selectTeam} setSelectTeam={setSelectTeam} />
      </StWrapper>
    </ThemeProvider>
  );
}

export default App;
