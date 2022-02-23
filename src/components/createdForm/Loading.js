import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Loading = () => (
  <Article>
    <Prop>loading..</Prop>
    <ReactLoading type="bubbles" color="grey" />
  </Article>
);

export default Loading;

const Article = styled.div``;

const Prop = styled.h3`
  color: grey;
`;
