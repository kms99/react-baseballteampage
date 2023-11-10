import React from "react";
import styled from "styled-components";
import { initTeams } from "../../commonData";

const StBtn = styled.button`
  background: transparent;
  border: none;
  transition: 0.5s;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  &:active,
  &:hover {
    background: ${(props) =>
      props.theme.mainColor[initTeams[props.value].team]};
    color: ${(props) => props.theme.subColor[initTeams[props.value].team]};
  }
`;

const HeaderButton = ({ title, selectTeamHandler, value, selectTeam }) => {
  const teamButtonClickHandler = () => {
    selectTeamHandler(value);
  };
  return (
    <StBtn onClick={teamButtonClickHandler} value={value} selected={selectTeam}>
      {title}
    </StBtn>
  );
};

export default HeaderButton;
