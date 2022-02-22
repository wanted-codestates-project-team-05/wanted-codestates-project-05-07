// import React from "react";
import styled from "styled-components";
import donw from "../../img/down_arrow.png";
import up from "../../img/up_arrow.png";

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
const SelectBox = styled(Input)`
  padding: 0 20px;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  background: url(${donw}) no-repeat 95% 50%;
`;
const Option = styled.option``;
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
  options,
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
        options={options}
        onClick={onClick}
      />
      {options &&
        options.map((option) => {
          <div style={{ position: "absolute" }}>{option}</div>;
        })}
    </Label>
  );
};

export const Select = ({
  label,
  id,
  type,
  required,
  placeholder,
  value,
  onChange,
  options,
}) => {
  return (
    <Label>
      {label}
      <SelectBox
        as="select"
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </SelectBox>
    </Label>
  );
};
