import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { DataNav } from './DataNav';
import { DataCard } from './DataCard';
import { Pagination } from './Pagination';

const DataList = ({dataList, setDataList}) =>  {

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPerPage, setCurrentPerPage] = useState(10);
  const endPage = currentPage * currentPerPage - 1;
  const startPage = currentPage * currentPerPage - currentPerPage;

  useEffect(() => {
    setDataList(dataList)
  },[dataList, setDataList])

  return (
    <DataListContainer>
      <DataItemList>
        {dataList && dataList
        .filter((item, index) => index <= endPage && index >= startPage )
        .map((item, key)=> (
          <div className='card' key={key}>
            <DataCard 
              name={item.name} 
              phone={item.phone} 
              address={item.address} 
              options={item.input_0}
              fileName={item.input_1}
            />
          </div>
        ))}
      </DataItemList>
      <Pagination 
        totalItem={dataList.length} 
        perPage={currentPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
    </DataListContainer>
  );
}

const DataListContainer = styled.div`
  background-color: #e2c4c9;
  min-height: calc(100vh - 7em);
  padding-top: 4em;
  `;

const DataItemList = styled.div`
  width: calc(250px * 5 + 40px);
  min-height: calc(100vh - 19em);
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 1.95px 1.95px 2.6px;
  padding: 20px;
  box-sizing: border-box;
  .card {
    display: inline-flex;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 1350px) {
    width: calc(250px * 4 + 40px);
  }
  @media (max-width: 1080px) {
    width: calc(250px * 3 + 40px);
  }
`;

export default DataList;