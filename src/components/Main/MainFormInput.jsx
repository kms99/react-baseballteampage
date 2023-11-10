import React, { useState } from "react";
import styled from "styled-components";

const MainFormInput = ({ section, teamCommentValue }) => {
  return (
    <StDiv>
      <label>{section.text}</label>
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
  margin-bottom: 1rem;
`;
export default MainFormInput;
