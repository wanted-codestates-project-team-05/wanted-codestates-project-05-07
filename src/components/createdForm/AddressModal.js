import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import DaumPostcode from "react-daum-postcode";

const AddressModal = ({ isModalOpen, onModalClose, modalRef, getAddress }) => {
  const handleComplete = (data) => {
    let useAddress = data.address;
    getAddress(useAddress);
    onModalClose();
  };
  return (
    <div>
      <BlackOut isModalOpen={isModalOpen} onClick={onModalClose} />
      <Modal
        ref={modalRef}
        isModalOpen={isModalOpen}
        role="dialog"
        aria-labelledby="modal-jtw"
        tabIndex="0"
      >
        <ModalHeader>
          <CloseModalBtn onClick={onModalClose}>X</CloseModalBtn>
          <Text id="modal-jtw">배송 주소</Text>
        </ModalHeader>
        {isModalOpen ? (
          <DaumPostcode
            style={postCodeStyle}
            onComplete={handleComplete}
            isDaumPost={isModalOpen}
          />
        ) : null}
      </Modal>
    </div>
  );
};

AddressModal.propTypes = {
  isModalOpen: PropTypes.bool,
  onModalClose: PropTypes.func,
};

AddressModal.defaultProps = {
  isModalOpen: true,
  onModalClose: undefined,
};

export default AddressModal;

const BlackOut = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? "auto" : "none")};
  width: 768px;
  height: 492px;
  background-color: white;
  z-index: 999;
`;

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 14px 0;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  left: 16px;
  font-size: 1rem;
`;

const Text = styled.p`
  font-size: 16px;
`;

const postCodeStyle = {
  maxWidth: "768px",
  height: "492px",
};
