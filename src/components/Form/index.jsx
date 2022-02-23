import React, { useEffect, useState } from "react";
import Field from "./Field";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FieldWrapper = styled.div`
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

const SortableList = SortableContainer(({ children }) => {
  return <FieldWrapper>{children}</FieldWrapper>;
});

const SortableItem = SortableElement(({ children }) => <>{children}</>);

export default function Form() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", fieldData: [] });
  const [fieldData, setFieldData] = useState([]);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [field, setField] = useState([]);

  const handleRemove = (id) => {
    setField((prev) => prev.filter((item) => item.id !== id));
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
        id: count,
      },
    ]);
    setCount((prev) => prev + 1);
  };

  const saveData = () => {
    setFormData({
      title,
      fieldData,
    });
  };

  const handleSave = () => {
    console.log("first");
    if (fieldData.filter((item) => item.label === "" || item.type === ""))
      return;
    console.log("s");
    saveData();
    // navigate("/");
  };

  useEffect(() => {
    console.log(fieldData);
  }, [fieldData]);

  return (
    <Container>
      <P>제목 *</P>
      <InputTitle value={title} onChange={(e) => setTitle(e.target.value)} />
      <P>필드목록 *</P>
      <FieldWrapper>
        <SortableList useDragHandle>
          {field.map((comp, index) => (
            <SortableItem key={index} index={index}>
              {comp.content}
            </SortableItem>
          ))}
        </SortableList>
      </FieldWrapper>
      <AddBtn onClick={handleAdd}>필드 추가하기</AddBtn>
      <BtnWrapper>
        <Button>폼열기</Button>
        <SaveBtn onClick={handleSave}>저장하기</SaveBtn>
      </BtnWrapper>
    </Container>
  );
}
