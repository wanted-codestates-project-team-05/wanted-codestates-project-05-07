import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { VscChevronRight } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";

const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 400px;
  height: 60px;
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

export const InputBox = ({
  label,
  nameMessage,
  id,
  type,
  required,
  placeholder,
  value,
  onChange,
  onClick,
}) => {
  return (
    <Label>
      {label}
      <Input
        nameMessage={nameMessage}
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </Label>
  );
};

export const SelectBox = ({
  label,
  id,
  type,
  required,
  value,
  onChange,
  options,
}) => {
  const obj = options.map((e) => {
    return { value: e, label: e };
  });

  return (
    <Label
      style={{
        zIndex: 10,
      }}
    >
      {label}
      <Select
        id={id}
        type={type}
        value={value}
        required={required}
        options={obj}
        onChange={onChange}
        placeholder=""
      ></Select>
    </Label>
  );
};

export const AgreementBox = ({ label, onClick, agreement }) => {
  return (
    <Label style={{ flexDirection: "row", alignItems: "center" }}>
      {agreement ? (
        <AiFillCheckCircle
          onClick={onClick}
          size="24"
          style={{
            marginRight: 10,
            color: "#eb4d4b",
          }}
        />
      ) : (
        <GiCircle
          onClick={onClick}
          size="24"
          style={{
            marginRight: 10,
          }}
        />
      )}

      {`${label} (필수)`}
      <VscChevronRight
        style={{
          marginLeft: 130,
          cursor: "pointer",
        }}
      />
    </Label>
  );
};
