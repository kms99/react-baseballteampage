import React, { useEffect, useState } from "react";
import MainFormInput from "./MainFormInput";
import { initTeams } from "../../commonData";
import MainFormButton from "./MainFormButton";
import MainFormTeamSelectBox from "./MainFormTeamSelectBox";
import { v4 as uuidv4 } from "uuid";

// form 입력 부분 최초값
const initInputData = {
  user: "",
  comment: "",
};

const MainForm = ({ selectTeam, setSelectTeam, onGetCommentHandler }) => {
  // form 입력 값 저장 state
  const [inputData, setInputData] = useState(initInputData);

  //   form submit 이벤트
  const teamCommentSubmitHandler = (e) => {
    e.preventDefault();

    // 부모 컴포넌트에 건내줄 새로운 배열
    const newComment = {
      ...inputData,
      team: initTeams[selectTeam].text,
      id: uuidv4(),
      date: new Date(),
    };

    // 부모 컴포넌트의 함수를 이용한 값 전달
    onGetCommentHandler(newComment);
  };

  //   input value state 저장 하기 위한 changeEventHandler
  //   (1)user Value Handler
  const userInputChangeHandler = (e) => {
    setInputData((prev) => {
      return { ...prev, user: e.target.value };
    });
  };
  // (2)comment Value Handler
  const commentInputChangeHandler = (e) => {
    setInputData((prev) => {
      return { ...prev, comment: e.target.value };
    });
  };

  //   MainFormInput을 동적생성하기 위한 배열
  const inputSection = [
    { key: "user", text: "닉네임", changeHandler: userInputChangeHandler },
    {
      key: "comment",
      text: "응원의 말",
      changeHandler: commentInputChangeHandler,
    },
  ];

  // MainFormInput 동적생성
  const formInputMapping = inputSection.map((section) => {
    return (
      <MainFormInput
        key={section.key}
        section={section}
        teamCommentValue={inputData[section.key]}
      />
    );
  });

  return (
    <form onSubmit={teamCommentSubmitHandler}>
      <MainFormTeamSelectBox
        selectTeam={selectTeam}
        setSelectTeam={setSelectTeam}
      />
      {formInputMapping}
      <MainFormButton>입력</MainFormButton>
    </form>
  );
};

export default MainForm;
