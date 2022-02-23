import styled, { css, keyframes } from "styled-components";
import React, { useEffect, useState } from "react";

const Label = styled.label`
  cursor: pointer;
  position: relative;
  width: 400px;
  height: 220px;
  border-radius: 10px;
  border: none;
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 100%;
  }
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Shade = styled.div`
  width: 360px;
  height: 180px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, ${(props) => (props.image ? "0.5" : "0.02")});
  border: none;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: ${(props) => (props.image ? "#ffffff" : "#858f97")};
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 90%;
  }
`;

const Icon = styled.span`
  margin-bottom: 13px;
`;

const Preview = styled.img`
  object-fit: cover;
  position: absolute;
  width: 380px;
  height: 180px;
  margin-left: 10px;
  border-radius: 10px;
`;

const Input = styled.input`
  display: none;
`;

const slideAnim = keyframes`
  0% {
    width : 0px;
  }
  50% {
    width: 100px;
  }
  100% {
    width: 200px;
  }
`;

const barSlide = (seconds) => css`
  animation: ${slideAnim} ${seconds}s linear;
  animation-fill-mode: forwards;
`;

const ProgressBar = styled.div`
  position: relative;
  width: 200px;
  height: 8px;
  border-radius: 10px;
  background-color: #858f97;
`;

const Progress = styled(ProgressBar)`
  z-index: 1;
  position: absolute;
  background-color: #304ffd;
  ${(props) => props.progress && barSlide(props.progress)};
`;

export default function PhotoInput({ label, id, type, required, value }) {
  const [imageData, setImageData] = useState(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (size > 0) {
      setTimeout(() => setSize(0), size / 2500);
    }
  }, [size]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setSize(e.target.files[0].size);
        setImageData(reader.result);
        console.log(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Label htmlFor="fileUpload">
      <Title>{label}</Title>
      <Input
        id="fileUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {size ? (
        <Shade image={imageData}>
          <ProgressBar>
            <Progress progress={size / 2500000} />
          </ProgressBar>
        </Shade>
      ) : (
        <Shade image={imageData}>
          <Icon>
            <ion-icon
              id={imageData ? "changePhoto" : "addPhoto"}
              name={imageData ? "camera-outline" : "add-outline"}
            />
          </Icon>
          눌러서 파일 {imageData ? "변경" : "등록"}
        </Shade>
      )}
      {imageData && <Preview src={imageData} />}
    </Label>
  );
}
