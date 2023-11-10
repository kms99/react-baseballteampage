import React from "react";
import styled from "styled-components";
import { initTeams } from "../../commonData";

const MainFormButton = ({ children, selected }) => {
  return (
    <StFormButton type="submit" selected={selected}>
      {children}
    </StFormButton>
  );
};

const StFormButton = styled.button`
  width: 100%;
  height: 3rem;
  background: transparent;
  border: 2px solid
    ${(props) => props.theme.mainColor[initTeams[props.selected].team]};
  color: ${(props) => props.theme.mainColor[initTeams[props.selected].team]};
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 1rem;

  &:active,
  &:hover {
    background: ${(props) =>
      props.theme.mainColor[initTeams[props.selected].team]};
    color: ${(props) => props.theme.subColor[initTeams[props.selected].team]};
  }
`;

export default MainFormButton;
