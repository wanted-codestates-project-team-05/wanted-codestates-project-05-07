import React from "react";
import Loading from "./Loading";
import styled from "styled-components";

const SubmitButton = ({
  onClickSubmit,
  disabledSubmit,
  isLoading,
  isSubmit,
}) => (
  <ButtonContainer>
    <Button
      type="submit"
      onClick={(e) => onClickSubmit(e)}
      disabledBgColor={disabledSubmit}
      disabled={false}
    >
      {isLoading ? <Loading /> : isSubmit ? "제출완료:)" : "제출하기"}
    </Button>
  </ButtonContainer>
);

export default SubmitButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
`;

const Button = styled.button`
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 400px;
  height: 50px;
  color: white;
  font-weight: 600;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ disabledBgColor }) =>
    disabledBgColor ? "lightGrey" : "#eb4d4b"};
`;
