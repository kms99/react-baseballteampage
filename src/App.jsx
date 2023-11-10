import "./App.css";
import react, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { initTeams } from "./commonData";
import { styled, ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  const [selectTeam, setSelectTeam] = useState(0);

  useEffect(() => {
    console.log(selectTeam);
  }, [selectTeam]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header selectTeam={selectTeam} onSelectTeams={setSelectTeam} />
      <Main selectTeam={selectTeam} setSelectTeam={setSelectTeam} />
    </ThemeProvider>
  );
}

export default App;
