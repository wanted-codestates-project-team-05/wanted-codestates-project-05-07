import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import AddressModal from "./AddressModal";

const CreatedForm = () => {
  const [isAddress, setIsAddress] = useState("");
  const getAddress = (address) => {
    setIsAddress(address);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const openButtonRef = useRef(null);
  const handleClickClose = useCallback(() => {
    setIsModalOpen(true);
    setTimeout(() => modalRef.current.focus());
  }, []);
  const handleClickOpen = useCallback(() => {
    setIsModalOpen(false);
    // 모달의 웹 접근성을 위해 시간차를 두고 포커스 이동
    setTimeout(() => openButtonRef.current.focus());
  }, []);

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
