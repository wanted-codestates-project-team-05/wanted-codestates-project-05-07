/* 
1.폼의 양식은 서버에서 내려주며 포맷은 다음과 같습니다.
2.모든 필수 폼(required = true)이 올바르게 입력되었을 때 “제출하기” 버튼이 활성화 됩니다.å
3.휴대폰 번호(type = phone)의 경우 올바른 데이터 타입인지 확인합니다.
4.파일 첨부 시, 얼마나 업로드 되었는지 프로그레스바를 출력합니다.
*/

import React, { useState } from "react";
import styled from "styled-components";
import Dummie from "./Dummie";

const Wrapper = styled.div`
  position: relative;
  width: 100vh;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 40px;
`;

const Label = styled.span`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 50vh;
  height: 50px;
  border-radius: 12px;
  border: ${(props) =>
    props.nameMessage && props.id === "name" ? "1px solid red" : "none"};
  background-color: #f7fafb;
  padding-left: 10px;
  &::placeholder {
    font-size: 16px;
  }
`;
const Submit = styled.input`
  width: 55vh;
  background-color: red;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

const NameAlert = styled.span`
  position: absolute;
  left: 190px;
  top: 232px;
  font-size: 12px;
  color: red;
`;

function SubForm() {
  const [nameMessage, setNameMessage] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    select: "",
    file: "",
  });

  const handlerUser = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      [e.target.id]: value,
    });
    if (e.target.id === "name") {
      if (value === "") {
        setNameMessage(true);
      } else {
        setNameMessage(false);
      }
    }
  };

  return (
    <Wrapper>
      <Title>데이터블 폼 예시</Title>
      {Dummie.map((e) => (
        <Form key={e.id}>
          <Label>{e.label}</Label>
          <Input
            nameMessage={nameMessage}
            id={e.id}
            type={e.type}
            required={e.required}
            placeholder={e.placeholder}
            value={user[e.id]}
            onChange={handlerUser}
            options={e.options}
          />
        </Form>
      ))}
      {nameMessage && <NameAlert>이름 항목은 필수 정보입니다</NameAlert>}
      <Submit type="submit" value="Submit"></Submit>
    </Wrapper>
  );
}

export default SubForm;
