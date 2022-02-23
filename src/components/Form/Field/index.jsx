import React, { useEffect, useState } from "react";
import Tag from "../Tag";
import {
  Check,
  CloseBtn,
  Container,
  DragBox,
  FirstBox,
  Input,
  LabelBox,
  Middle,
  SelectBox,
  TextArea,
} from "./styles";

export default function Field({ id, setForm, handleRemove }) {
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [label, setLabel] = useState("");
  const [option, setOption] = useState([]);
  const [desc, setDesc] = useState("");
  const [text, setText] = useState("");
  const [required, setRequired] = useState(false);
  const [draggable, setDraggable] = useState(false);

  const handleClick = () => {
    handleRemove(id);
  };

  useEffect(() => {
    setData({
      id,
      type,
      label,
      option,
      desc,
      placeholder: text,
      required,
    });
  }, [id, desc, label, option, required, text, type]);

  return (
    <Container draggable={draggable}>
      <FirstBox>
        <SelectBox>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="" hidden>
              타입 선택
            </option>
            <option value="text">텍스트</option>
            <option value="phone">전화번호</option>
            <option value="address">주소</option>
            <option value="select">드롭다운</option>
            <option value="file">첨부파일</option>
            <option value="agreement">이용약관</option>
          </select>
        </SelectBox>
        <LabelBox>
          <Input
            placeholder=""
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </LabelBox>
        <Check>
          <label>
            <input
              type="checkbox"
              onChange={() => setRequired((prev) => !prev)}
            />
            필수
          </label>
        </Check>
        <DragBox
          onDrag={() => setDraggable(true)}
          onDragEnd={() => setDraggable(false)}
        >
          <span draggable={false}>↕</span>
        </DragBox>
        <CloseBtn onClick={handleClick}>x</CloseBtn>
      </FirstBox>
      {type === "text" || type === "phone" || type === "select" ? (
        <Middle>
          {type === "text" || type === "phone" ? (
            <Input
              placeholder="placeholder"
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            ""
          )}
          {type === "select" ? <Tag tag={option} setTag={setOption} /> : ""}
        </Middle>
      ) : (
        ""
      )}
      <TextArea
        placeholder="설명을 입력하세요"
        onChange={(e) => setDesc(e.target.value)}
      />
    </Container>
  );
}
