import React, { useEffect, useState } from "react";
import MainFormInput from "./MainFormInput";
import { initTeams } from "../../commonData";
import MainFormButton from "./MainFormButton";
import MainFormTeamSelectBox from "./MainFormTeamSelectBox";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

// form 입력 부분 최초값
const initInputData = {
  user: "",
  comment: "",
};

const MainForm = ({ selectTeam, setSelectTeam, onGetCommentHandler }) => {
  // form 입력 값 저장 state
  const [inputData, setInputData] = useState(initInputData);

  const lengthCheck = (checkValue, length) => {
    if (checkValue.length > length) {
      alert(`최대 ${length} 글자까지 작성할 수 있습니다.`);
      return false;
    }
    return true;
  };

  // 팀변경시 input 값 초기화
  useEffect(() => {
    setInputData(initInputData);
  }, [selectTeam]);

  //   form submit 이벤트
  const teamCommentSubmitHandler = (e) => {
    e.preventDefault();

    // Validation Check
    // if (!inputData.user) {
    //   alert("닉네임을 입력하세요.");
    //   return;
    // }else if (inputData.user.length>20){

    // }

    // if (!inputData.comment) {
    //   alert("내용을 입력하세요.");
    //   return;
    // }else if (inputData.user.length>100){

    // }

    // 부모 컴포넌트에 건내줄 새로운 배열
    const newComment = {
      ...inputData,
      team: initTeams[selectTeam].text,
      id: uuidv4(),
      date: new Date(),
    };

    // input 값 초기화
    setInputData(initInputData);
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
    {
      key: "user",
      text: "닉네임",
      changeHandler: userInputChangeHandler,
      maxWidth: 20,
    },
    {
      key: "comment",
      text: "응원의 말",
      changeHandler: commentInputChangeHandler,
      maxWidth: 100,
    },
  ];

  // MainFormInput 동적생성
  const formInputMapping = inputSection.map((section) => {
    return (
      <MainFormInput
        key={section.key}
        section={section}
        teamCommentValue={inputData[section.key]}
        selected={selectTeam}
        maxWidth={section.maxWidth}
      />
    );
  });

  return (
    <StForm selected={selectTeam} onSubmit={teamCommentSubmitHandler}>
      <StImageDiv selected={selectTeam}></StImageDiv>
      <div>
        <MainFormTeamSelectBox
          selectTeam={selectTeam}
          setSelectTeam={setSelectTeam}
        />
        {formInputMapping}

        <MainFormButton selected={selectTeam}>작성하기</MainFormButton>
      </div>
    </StForm>
  );
};

const StForm = styled.form`
  border: 5px solid
    ${(props) => props.theme.mainColor[initTeams[props.selected].team]};
  border-radius: 20px;
  width: 50rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  background: ${(props) =>
    props.theme.subColor[initTeams[props.selected].team]};
`;

const StImageDiv = styled.div`
  width: 10rem;
  height: 10rem;
  background: url(${(props) => initTeams[props.selected].logo});
  background-size: contain;
  background-repeat: no-repeat;
`;
export default MainForm;
