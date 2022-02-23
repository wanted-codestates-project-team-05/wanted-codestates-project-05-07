// @ts-nocheck
import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { VscChevronRight } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";

const Label = styled.label`
  font-weight: 600;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-radius: 12px;
  border: ${(props) =>
    props.nameMessage && props.id === "name" ? "1px solid red" : "none"};
  background-color: #f7fafb;
  padding-left: 10px;
  &::placeholder {
    font-size: 16px;
  }
`;

// Option custom
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.data.color,
    opacity: 0.8,
    padding: 20,
  }),
  control: (provided) => ({
    ...provided,
    width: "100%",
    height: "50px",
    border: "none",
    borderRadius: 12,
    paddingLeft: 5,
    background: "#f7fafb",
    fontSize: 23,
    marginTop: 10,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.data.color,
  }),
};

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
        styles={customStyles}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
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
