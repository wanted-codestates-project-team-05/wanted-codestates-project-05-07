/* 
1.폼의 양식은 서버에서 내려주며 포맷은 다음과 같습니다.
2.모든 필수 폼(required = true)이 올바르게 입력되었을 때 “제출하기” 버튼이 활성화 됩니다.
(name, phone, address, input_0(옵션), agreement_0(개인정보 수집 및 약관 내용))
3.휴대폰 번호(type = phone)의 경우 올바른 데이터 타입인지 확인합니다.
4.파일 첨부 시, 얼마나 업로드 되었는지 프로그레스바를 출력합니다.
*/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormList from "./FormList";
import { InputBox, SelectBox, AgreementBox } from "./formItems";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100vw;
  box-shadow: 2px 2px 2px green;
`;
const Submit = styled.input`
  width: 400px;
  height: 50px;
  background-color: #eb4d4b;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eb4d4b;
  }
`;

const AlertMessage = styled.span`
  font-size: 12px;
  color: red;
  padding-left: 10px;
`;

function SubForm() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    select: "",
    option: "",
    file: "",
  });

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [address, setAddress] = useState(false);
  const [option, setOption] = useState(false);
  const [agreement, setAgreement] = useState(false);

  // phone 하이픈 자동 생성
  useEffect(() => {
    if (user.phone.length === 10) {
      setUser({
        ...user,
        phone: user.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
      });
    }
    if (user.phone.length === 13) {
      setUser({
        ...user,
        phone: user.phone
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [user.phone]);

  // nameHandler
  const nameHandler = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      [e.target.id]: value,
    });
    if (value === "") {
      setNameMessage("이름 항목은 필수 정보입니다");
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  // phoneHandler
  const phoneHandler = (e) => {
    const { value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(value)) {
      setUser({ ...user, phone: value });
    }
    if (value === "") {
      setPhoneMessage("휴대폰 번호 항목은 필수 정보입니다");
      setIsPhone(false);
    } else if (!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(value)) {
      setPhoneMessage("휴대폰 번호가 올바르지 않습니다.");
      setIsPhone(false);
    } else {
      setPhoneMessage("");
      setIsPhone(true);
    }
  };

  // option
  const optionHandler = (e) => {
    setUser({ ...user, option: e.value });
    setOption(true);
  };

  // agreement
  const agreementHandler = () => {
    setAgreement((prev) => !prev);
  };

  // formSubmit
  const formSubmit = () => {
    if (!isName || !isPhone || !option || !agreement) {
      alert("필수항목을 입력하세요");
    } else {
      alert("성공");
    }
  };

  return (
    <Wrapper>
      <Title>데이터블 폼 예시</Title>
      <Form>
        {FormList.map((form) => (
          <InputList key={form.id}>
            {form.id === "name" && (
              <>
                <InputBox
                  label={form.label}
                  nameMessage={nameMessage}
                  id={form.id}
                  type={form.type}
                  required={form.required}
                  placeholder={form.placeholder}
                  value={user[form.id]}
                  onChange={nameHandler}
                />
                {<AlertMessage>{nameMessage}</AlertMessage>}
              </>
            )}
            {form.id === "phone" && (
              <>
                <InputBox
                  label={form.label}
                  nameMessage={nameMessage}
                  id={form.id}
                  type={form.type}
                  required={form.required}
                  value={user[form.id]}
                  onChange={phoneHandler}
                />
                {<AlertMessage>{phoneMessage}</AlertMessage>}
              </>
            )}
            {form.id === "address" && (
              <InputBox
                label={form.label}
                nameMessage={nameMessage}
                id={form.id}
                type={form.type}
                required={form.required}
                value={user[form.id]}
                onChange={nameHandler}
              />
            )}
            {form.id === "input_0" && (
              <SelectBox
                label={form.label}
                nameMessage={nameMessage}
                id={form.id}
                type={form.type}
                required={form.required}
                value={user[form.id]}
                onChange={optionHandler}
                options={form.options}
              ></SelectBox>
            )}
            {form.id === "input_1" && (
              <InputBox
                label={form.label}
                id={form.id}
                type={form.type}
                required={form.required}
                value={user[form.id]}
              />
            )}
            {form.id === "agreement_0" && (
              <AgreementBox
                label={form.label}
                id={form.id}
                type={form.type}
                required={form.required}
                value={user[form.id]}
                onClick={agreementHandler}
              />
            )}
          </InputList>
        ))}
        <Footer>
          <Submit type="submit" value="Submit" onClick={formSubmit}></Submit>
        </Footer>
      </Form>
    </Wrapper>
  );
}

export default SubForm;
