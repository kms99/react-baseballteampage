import React, { useEffect, useState } from "react";
import { initTeams } from "../../commonData";
import MainForm from "./MainForm";
import styled from "styled-components";
import MainCard from "./MainCard";

const Main = ({ selectTeam, setSelectTeam }) => {
  const [allComment, setAllComment] = useState([]);

  const getCommentHandler = (comment) => {
    setAllComment((prev) => [comment, ...prev]);
  };

  const filteredComments = allComment.filter(
    (comments) => comments.team === initTeams[selectTeam].text
  );
  let currentTeamComments = (
    <>
      <h2>
        {initTeams[selectTeam].text}팀에 총 ({filteredComments.length})개의
        코멘트가 있습니다.
      </h2>
      <ul>
        {filteredComments.map((filteredComments) => {
          return (
            <MainCard
              key={filteredComments.id}
              filteredComments={filteredComments}
            />
          );
        })}
      </ul>
    </>
  );
  useEffect(() => {
    console.log(allComment);
  }, [allComment]);

  if (filteredComments.length === 0)
    currentTeamComments = (
      <StValidationMessageDiv>
        등록된 응원 글이 없습니다.
      </StValidationMessageDiv>
    );

  return (
    <StMain>
      <MainForm
        selectTeam={selectTeam}
        setSelectTeam={setSelectTeam}
        onGetCommentHandler={getCommentHandler}
      />

      <StCommentDiv selected={selectTeam}>{currentTeamComments}</StCommentDiv>
    </StMain>
  );
};

const StMain = styled.main`
  color: white;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StCommentDiv = styled.div`
  width: 50rem;
  background-color: #ffffff83;
  color: black;
  border-radius: 15px;
  padding: 1rem;
  margin-top: 1rem;
  max-height: 50rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.mainColor[initTeams[props.selected].team]};
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  & > h2 {
    margin: 1rem 0 2rem 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const StValidationMessageDiv = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
  color: #ad053a;
  font-weight: bold;
`;

export default Main;
