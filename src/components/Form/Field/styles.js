import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 480px;
  border-radius: 7px;
  border: 1px solid lightgray;
  margin-bottom: 2px;
  font-weight: bold;
`;

export const FirstBox = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 35px;
`;

export const SelectBox = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 7px 0 0 0;
  border-right: 1px solid lightgray;
  & > select {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 7px 0 0 0;
    font-weight: bold;
  }
`;

export const LabelBox = styled.div`
  flex-grow: 1;
  border-right: 1px solid lightgray;
  display: flex;
  justify-content: flex-start;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: crimson;
  border-radius: 0 7px 0 0;
  width: 7%;
  cursor: pointer;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: red;
  }
`;

export const DragBox = styled.div`
  width: 8%;
  border-right: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export const Check = styled.div`
  border-right: 1px solid lightgray;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;
`;

export const Middle = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: none;
  outline: none;
`;

export const TextArea = styled.textarea`
  resize: none;
  border: none;
  border-radius: 0 0 7px 7px;
  outline: none;
  padding: 5px;
  height: 70px;
`;
