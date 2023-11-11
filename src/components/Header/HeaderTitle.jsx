import React from "react";
import styled from "styled-components";
import { initTeams } from "../../commonData";
import { useNavigate } from "react-router-dom";

const StTitle = styled.h1`
  font-size: 4rem;
  font-family: "BlackHanSans", sans-serif;
  color: ${(props) => props.theme.subColor[initTeams[props.selected].team]};
  transition: all 0.5s;
  cursor: pointer;
`;
const HeaderTitle = ({ selectTeam }) => {
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    navigate("/");
  };
  return (
    <StTitle selected={selectTeam} onClick={goToHomeHandler}>
      프로야구 TALK
    </StTitle>
  );
};

export default HeaderTitle;
