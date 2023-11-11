import React from "react";
import styled from "styled-components";
import DetailPageCardUser from "./DetailPageCardUser";
import DetailPageCardCommentContainer from "./DetailPageCardCommentContainer";

const DetailPageCard = ({ findData, setAllComment }) => {
  return (
    <StInfoDiv>
      <DetailPageCardUser findData={findData} />
      <DetailPageCardCommentContainer
        findData={findData}
        setAllComment={setAllComment}
      />
    </StInfoDiv>
  );
};
const StInfoDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;

export default DetailPageCard;
