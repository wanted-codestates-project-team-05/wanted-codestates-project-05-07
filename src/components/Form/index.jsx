import React, { useEffect, useState } from "react";
import Field from "./Field";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

const FeildWrapper = styled.div`
  margin-bottom: 5px;
`;

const P = styled.div`
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  color: gray;
`;

const InputTitle = styled.input`
  width: 100%;
  outline: none;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: none;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Button = styled.button`
  outline: none;
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid dodgerblue;
  background-color: white;
  color: dodgerblue;
`;

const AddBtn = styled(Button)`
  width: 100%;
`;

const SaveBtn = styled(Button)`
  color: white;
  background-color: dodgerblue;
`;

const BtnWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export default function Form() {
  const [formData, setFormData] = useState({ title: "", fieldData: [] });
  const [fieldData, setFieldData] = useState([]);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [field, setField] = useState([]);

  const saveData = () => {
    setFormData({
      title,
      fieldData,
    });
  };

  const handleRemove = (id) => {
    setField((prev) => prev.filter((item) => item.index !== id));
  };

  const handleAdd = () => {
    setField((prev) => [
      ...prev,
      {
        content: (
          <Field
            key={count}
            id={count}
            handleRemove={handleRemove}
            setFieldData={setFieldData}
          />
        ),
        index: count,
      },
    ]);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(fieldData);
  }, [fieldData]);

  return (
    <Container>
      <P>제목 *</P>
      <InputTitle value={title} onChange={(e) => setTitle(e.target.value)} />
      <P>필드목록 *</P>
      <FeildWrapper>{field.map((comp) => comp.content)}</FeildWrapper>
      <AddBtn onClick={handleAdd}>필드 추가하기</AddBtn>
      <BtnWrapper>
        <Button>폼열기</Button>
        <SaveBtn>저장하기</SaveBtn>
      </BtnWrapper>
    </Container>
  );
}
