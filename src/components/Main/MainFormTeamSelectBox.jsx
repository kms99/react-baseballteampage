import React from "react";
import { initTeams } from "../../commonData";

const MainFormTeamSelectBox = ({ selectTeam, setSelectTeam }) => {
  const commentSelectTeamHandler = (e) => {
    setSelectTeam(e.target.value);
  };

  const teamOption = initTeams.map((team, index) => {
    return (
      <option value={index} key={team.team}>
        {team.text}
      </option>
    );
  });

  return (
    <select value={selectTeam} onChange={commentSelectTeamHandler}>
      {teamOption}
    </select>
  );
};

export default MainFormTeamSelectBox;
