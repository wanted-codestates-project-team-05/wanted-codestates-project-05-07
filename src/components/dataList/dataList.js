import React from 'react'
import styled from 'styled-components';
import { DataNav } from './DataNav';

const DataList = () =>  {
  return (
    <DataListContainer>
      <DataNav />
      <DataItemList>
        
      </DataItemList>
    </DataListContainer>
  );
}

const DataListContainer = styled.div`
  background-color: #E2C4C9;
  height: 100vh;
`;

const DataItemList = styled.article`
  width: 90%;
  height: calc(100vh - 300px);
  background-color: #fff;
  margin: 5em auto 0;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 1.95px 1.95px 2.6px;
  .none-list {
    padding-top: 10em;
    text-align: center;
    color: gray;
    box-sizing: border-box;
  }
`;

export default DataList;