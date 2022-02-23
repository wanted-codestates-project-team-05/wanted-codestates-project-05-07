import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import AddressModal from "./AddressModal";
const AddressInput = ({
  label,
  nameMessage,
  id,
  type,
  required,
  value,
  setValue,
  onChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getAddress = (address) => {
    setValue(address);
  };

  const modalRef = useRef(null);
  const openButtonRef = useRef(null);
  const handleClickModalOpen = useCallback(() => {
    setIsModalOpen(true);
    setTimeout(() => modalRef.current.focus(), 100);
  }, []);
  const handleClickClose = useCallback(() => {
    setIsModalOpen(false);
    // 모달의 웹 접근성을 위해 시간차를 두고 포커스 이동
    setTimeout(() => openButtonRef.current.focus(), 100);
  }, []);

  return (
    <Wrap>
      <Label>{label}</Label>
      <div
        ref={openButtonRef}
        onClick={handleClickModalOpen}
        aria-haspopup="true"
        aria-pressed={isModalOpen}
      >
        <Input
          type="text"
          autocorrect="off"
          autocapitalize="none"
          autocomplete="off"
          value={value}
          nameMessage={nameMessage}
          id={id}
          type={type}
          required={required}
          onChange={onChange}
        />
      </div>
      <AddressModal
        isModalOpen={isModalOpen}
        onModalClose={handleClickClose}
        modalRef={modalRef}
        getAddress={getAddress}
      />
    </Wrap>
  );
};

export default AddressInput;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  margin-top: 5px;
  border-radius: 12px;
  border: ${(props) =>
    props.nameMessage && props.id === "name" ? "1px solid red" : "none"};
  background-color: #f7fafb;
  padding-left: 10px;
  &::placeholder {
    font-size: 16px;
  }
`;
