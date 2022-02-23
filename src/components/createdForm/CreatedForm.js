import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddressInput from "./AddressInput";
import SubmitButton from "./SubmitButton";
import { submitForm } from "./submitForm";
import { InputBox, SelectBox, AgreementBox } from "./formItems";
import PhotoInput from "./PhotoInput";

const CreatedForm = ({ newForm, setFormAnswer }) => {
  const [address, setAddress] = useState("");

  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    input_0: "",
    input_1: "",
    agreement_0: false,
  });

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isOption, setIsOption] = useState(false);

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
  // submit 활성화
  useEffect(() => {
    if (isName && isPhone && isOption && user.agreement_0 && user.address) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  }, [isName, isPhone, isOption, user]);

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
    setUser({ ...user, input_0: e.value });
    setIsOption(true);
  };

  // agreement
  const agreementHandler = () => {
    setUser({
      ...user,
      agreement_0: user.agreement_0 ? false : true,
    });
  };

  //제출하기 버튼 : sh
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const handleLoading = (loading) => {
    setIsLoading(loading);
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    submitForm(user, handleLoading)
      .then((result) => {
        console.log("제출 성공: ", result);
        setIsSubmit(true);
        setFormAnswer(result);
      })
      .catch((error) => console.log("제출 실패: ", error));
  };
  //sh 끝

  const mappingInputList = (formList) => {
    return formList.fields.map((form) => (
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
          <AddressInput
            label={form.label}
            nameMessage={nameMessage}
            id={form.id}
            type={form.type}
            required={form.required}
            value={user[form.id]}
            user={user}
            setValue={setUser}
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
            value={user[form.input_0]}
            onChange={optionHandler}
            options={form.options}
          />
        )}
        {form.id === "input_1" && (
          <PhotoInput
            label={form.label}
            id={form.id}
            type={form.type}
            required={form.required}
            user={user}
            setUser={setUser}
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
            agreement={user.agreement_0}
          />
        )}
      </InputList>
    ));
  };

  return (
    <Wrapper>
      <Title>{newForm.title}</Title>
      <Form>
        {mappingInputList(newForm)}
        <SubmitButton
          onClickSubmit={handleClickSubmit}
          disabledSubmit={disabledSubmit}
          isLoading={isLoading}
          isSubmit={isSubmit}
        />
      </Form>
    </Wrapper>
  );
};

export default CreatedForm;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  margin-top: 20px;
  font-size: 20px;
`;

const Form = styled.form`
  width: 400px;
  height: 110vh;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const InputList = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlertMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
  padding-left: 10px;
`;
