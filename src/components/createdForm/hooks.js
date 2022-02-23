// import React from "react";
import React, { components, useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { VscChevronRight } from "react-icons/vsc";

const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
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
// const Select = styled(Input)`
//   padding: 0 20px;
//   -webkit-appearance: none; /* 네이티브 외형 감추기 */
//   -moz-appearance: none;
//   appearance: none;
//   background: url(${donw}) no-repeat 95% 50%;
//   &:option {
//     border: 2px solid red;
//   }
// `;
// const Option = styled.option`
//   border-bottom: 1px dashed rgb(170, 72, 72);
//   padding: 5px 15px 5px;
//   transition: 0.1s;
// `;

const Argeement = styled.input`
  border: 1px solid #999;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  cursor: "pointer";
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

const options = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

export const SelectBox = ({
  label,
  id,
  type,
  required,
  value,
  onChange,
  // options,
}) => {
  return (
    <Label>
      {label}
      <Select
        id={id}
        type={type}
        value={value}
        required={required}
        options={options}
        onChange={onChange}
      ></Select>
    </Label>
  );
};

export const AgreementBox = ({
  label,
  id,
  type,
  required,
  placeholder,
  value,
  onClick,
  options,
}) => {
  return (
    <Label style={{ flexDirection: "row", alignItems: "center" }}>
      <Argeement
        options={options}
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
      ></Argeement>
      {label} (필수)
      <VscChevronRight
        style={{
          marginLeft: 130,
          cursor: "pointer",
        }}
      />
    </Label>
  );
};
