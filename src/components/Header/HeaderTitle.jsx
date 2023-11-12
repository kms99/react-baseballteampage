import React, { useContext } from "react";
import styled from "styled-components";
import { initTeams } from "../../commonData";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/AppContext";

const HeaderTitle = () => {
  const navigate = useNavigate();
  const { selectTeam } = useContext(MainContext);

  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <StTitle selected={selectTeam} onClick={goToHomeHandler}>
      프로야구 TALK
    </StTitle>
  );
};

//styled components
const StTitle = styled.h1`
  font-size: 4rem;
  font-family: "BlackHanSans", sans-serif;
  color: ${(props) => props.theme.subColor[initTeams[props.selected].team]};
  transition: all 0.5s;
  cursor: pointer;
`;
export default HeaderTitle;
