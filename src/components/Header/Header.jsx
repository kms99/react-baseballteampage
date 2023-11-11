import React from "react";
import { initTeams } from "../../commonData";
import HeaderTitle from "./HeaderTitle";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";

const StHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(
    ${(props) => props.theme.mainColor[initTeams[props.selected].team]},
    #000
  );
`;

const StButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Header = ({ children, selectTeam, setSelectTeam }) => {
  const selectTeamHandler = (value) => {
    setSelectTeam(value);
  };

  // const [selectTeam, setSelectTeam] = useState(0);

  const teamButtons = (
    <StButtonDiv>
      {initTeams.map((team, index) => (
        <HeaderButton
          key={team.team}
          selectTeam={selectTeam}
          title={team.text}
          selectTeamHandler={selectTeamHandler}
          value={index}
        />
      ))}
    </StButtonDiv>
  );

  return (
    <>
      <StHeader selected={selectTeam}>
        <HeaderTitle selectTeam={selectTeam} />
        {teamButtons}
      </StHeader>
      {children}
    </>
  );
};

export default Header;
