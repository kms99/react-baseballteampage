import React from "react";
import styled from "styled-components";
import { initTeams } from "../../commonData";

const StTitle = styled.h1`
  font-size: 4rem;
  font-family: "Black Han Sans", sans-serif;
  color: ${(props) => props.theme.subColor[initTeams[props.selected].team]};
  transition: all 0.5s;
`;
const HeaderTitle = ({ selectTeam }) => {
  return <StTitle selected={selectTeam}>프로야구 TALK</StTitle>;
};

export default HeaderTitle;
