import React, { useState } from "react";
import { initTeams } from "../../commonData";
import styled from "styled-components";

const MainFormInput = ({ section, teamCommentValue, selected }) => {
  return (
    <StDiv>
      <StLabel selected={selected}>{section.text}</StLabel>
      <StInput value={teamCommentValue} onChange={section.changeHandler} />
    </StDiv>
  );
};

const StInput = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  border: 1px solid white;
  color: white;
  height: 3rem;
  font-size: 2rem;
  margin-top: 0.5rem;
`;

const StDiv = styled.div`
  margin-bottom: 0.5rem;
`;

const StLabel = styled.label`
  font-weight: bold;
  color: ${(props) => props.theme.mainColor[initTeams[props.selected].team]};
`;
export default MainFormInput;
