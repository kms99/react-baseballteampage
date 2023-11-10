import React, { useEffect, useState } from "react";
import { initTeams } from "../../commonData";
import MainForm from "./MainForm";

const Main = ({ selectTeam, setSelectTeam }) => {
  const [allComment, setAllComment] = useState([]);

  const getCommentHandler = (comment) => {
    setAllComment((prev) => [comment, ...prev]);
  };

  const filteredComments = allComment.filter(
    (comments) => comments.team === initTeams[selectTeam].text
  );
  let currentTeamComments = (
    <ul>
      {filteredComments.map((filteredComments) => {
        return (
          <li key={filteredComments.id}>
            <div>
              <div>{filteredComments.team}</div>
              <h3>{filteredComments.user}</h3>
              <p>{filteredComments.comment}</p>
              <div>{filteredComments.date.getFullYear()}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
  useEffect(() => {
    console.log(allComment);
  }, [allComment]);

  if (filteredComments.length === 0)
    currentTeamComments = (
      <div>등록된 응원 글이 없습니다. 지금 바로 작성해보세요.</div>
    );

  return (
    <div>
      <MainForm
        selectTeam={selectTeam}
        setSelectTeam={setSelectTeam}
        onGetCommentHandler={getCommentHandler}
      />

      <div>
        <h2>{initTeams[selectTeam].text}</h2>
        {currentTeamComments}
      </div>
    </div>
  );
};

export default Main;
