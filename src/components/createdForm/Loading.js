import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Loading = () => (
  <Article>
    <ReactLoading type="bubbles" color="white" height={50} width={50} />
  </Article>
);

export default Loading;

const Article = styled.div``;
