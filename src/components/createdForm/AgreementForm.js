// @ts-nocheck
import React from "react";
import { VscChevronLeft } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  position: relative;
  width: 400px;
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`;

const Form = styled.form`
  width: 400px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const Text = styled.div`
  padding: 24px;
`;

const LeftArrow = styled(VscChevronLeft)`
  cursor: pointer;
  position: absolute;
  font-size: 25px;
  left: 0;
  top: 0;
`;

export default function AgreementForm() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>
        <LeftArrow onClick={() => navigate(-1)} />
        개인정보 수집 약관 동의
      </Title>
      <Form>
        {state.agreement && (
          <Text dangerouslySetInnerHTML={{ __html: state.agreement }}></Text>
        )}
      </Form>
    </Wrapper>
  );
}
