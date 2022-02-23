import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import AddressModal from "./AddressModal";
import { submitForm } from "./submitForm";
import Loading from "./Loading";

const CreatedForm = () => {
  const [isAddress, setIsAddress] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const getAddress = (address) => {
    setIsAddress(address);
  };
  const handleLoading = (loading) => {
    setIsLoading(loading);
  };
  const modalRef = useRef(null);
  const openButtonRef = useRef(null);
  const handleClickClose = useCallback(() => {
    setIsModalOpen(true);
    setTimeout(() => modalRef.current.focus(), 100);
  }, []);
  const handleClickOpen = useCallback(() => {
    setIsModalOpen(false);
    // 모달의 웹 접근성을 위해 시간차를 두고 포커스 이동
    setTimeout(() => openButtonRef.current.focus(), 100);
  }, []);
  const handleClickSubmit = () => {
    submitForm(
      "김코딩",
      "010-4444-4444",
      isAddress,
      "s",
      "",
      true,
      handleLoading
    )
      .then((result) => {
        console.log("제출 성공: ", result);
        setIsSubmit(true);
      })
      .catch((error) => console.log("제출 실패: ", error));
  };

  return (
    <Wrap>
      <Fieldset>
        <Label>배송지</Label>
        <div
          ref={openButtonRef}
          onClick={handleClickClose}
          aria-haspopup="true"
          aria-pressed={isModalOpen}
        >
          <Input
            type="text"
            autocorrect="off"
            autocapitalize="none"
            autocomplete="off"
            value={isAddress}
          />
        </div>
        <ButtonContainer>
          <SubmitButton
            onClick={handleClickSubmit}
            disabled={disabledSubmit}
            disabledSubmit={disabledSubmit}
          >
            {isLoading ? <Loading /> : isSubmit ? "제출완료:)" : "제출하기"}
          </SubmitButton>
        </ButtonContainer>
      </Fieldset>
      <AddressModal
        isModalOpen={isModalOpen}
        onModalClose={handleClickOpen}
        modalRef={modalRef}
        getAddress={getAddress}
      />
    </Wrap>
  );
};

export default CreatedForm;

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Fieldset = styled.fieldset``;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.75rem;
`;

const Input = styled.input`
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const SubmitButton = styled.button`
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 400px;
  height: 50px;
  color: white;
  font-weight: 600;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ disabledSubmit }) =>
    disabledSubmit ? "lightGrey" : "#eb4d4b"};
`;
