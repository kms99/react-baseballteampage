import React, { useState } from "react";

const MainFormInput = ({ section, teamCommentValue }) => {
  return (
    <div>
      <label>{section.text}</label>
      <input value={teamCommentValue} onChange={section.changeHandler} />
    </div>
  );
};

export default MainFormInput;
