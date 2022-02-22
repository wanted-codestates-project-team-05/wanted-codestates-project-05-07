import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 3px 8px;
  gap: 5px;
  min-height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  & input {
    outline: none;
    border: none;
    flex-grow: 1;
    min-width: 200px;
  }
`;

const TagBox = styled.div`
  display: flex;
  gap: 5px;
  border: 1px solid lightgreen;
  border-radius: 5px;
  background-color: rgba(229, 255, 230, 1);
  color: rgba(0, 194, 6, 1);
  padding: 3px;
  & > div {
    cursor: pointer;
  }
`;

export default function Tag(tags, setTags) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key !== ",") return;
    e.preventDefault();
    if (input) {
      setTags((prev) => [
        ...prev,
        {
          content: input,
          id: prev.length ? prev[prev.length - 1].id + 1 : 0,
        },
      ]);
      setInput("");
    }
  };

  return (
    <Container>
      {tags?.map((tag) => (
        <TagBox key={tag.id}>
          <span>{tag.content}</span>
          <div
            onClick={(e) => {
              setTags((prev) => prev.filter((item) => item.id !== tag.id));
            }}
          >
            X
          </div>
        </TagBox>
      ))}
      <input
        type={"text"}
        value={input}
        maxLength={20}
        placeholder="Please ',' to add tags"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </Container>
  );
}
