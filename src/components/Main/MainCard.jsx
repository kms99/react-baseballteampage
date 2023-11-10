import React from "react";
import styled from "styled-components";

const MainCard = ({ filteredComments }) => {
  const date = new Date(filteredComments.date);
  const month = Math.floor((date.getMonth() + 1) / 10)
    ? date.getMonth() + 1
    : `0${date.getMonth() + 1}`;
  const day = Math.floor(date.getDate() / 10)
    ? date.getDate()
    : `0${date.getDate()}`;
  const hour = Math.floor(date.getHours() / 10)
    ? date.getHours()
    : `0${date.getHours()}`;
  const minute = Math.floor(date.getMinutes() / 10)
    ? date.getMinutes()
    : `0${date.getMinutes()}`;
  const second = Math.floor(date.getSeconds() / 10)
    ? date.getSeconds()
    : `0${date.getSeconds()}`;

  const commentDate = `${date.getFullYear()}/${month}/${day}  ${hour}:${minute}:${second}`;
  return (
    <StLi key={filteredComments.id}>
      <StDateDiv>{commentDate}</StDateDiv>

      <StUserImg avatar={filteredComments.avatar}></StUserImg>
      <StCommentFirstLineDiv>
        <StTeamNameH3>{filteredComments.team}</StTeamNameH3>
        <StUserNameH2>{filteredComments.user} 님</StUserNameH2>
      </StCommentFirstLineDiv>

      <StCommentP>{filteredComments.comment}</StCommentP>
    </StLi>
  );
};

const StLi = styled.li`
  width: 100%;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  position: relative;
`;

const StTeamNameH3 = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const StUserNameH2 = styled.h2`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
`;

const StCommentP = styled.p`
  font-size: 1.3rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StCommentFirstLineDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4.5rem;
  align-items: start;
`;

const StUserImg = styled.div`
  width: 4rem;
  height: 4rem;
  background: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  position: absolute;
`;
const StDateDiv = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
export default MainCard;
