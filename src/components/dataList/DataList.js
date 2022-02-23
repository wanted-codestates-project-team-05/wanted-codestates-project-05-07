import React, { useState } from 'react'
import styled from 'styled-components';
import { DataNav } from './DataNav';
import { DataCard } from './DataCard';
import { Pagination } from './Pagination';

const DataList = () =>  {

  const fakeData = [
    {
      name: 'test1',
      phone: '010-1111-1111',
      address: 'seoul',
      fileName: 'file1',
      options: 'r'
    },{
      name: 'test2',
      phone: '010-2222-2222',
      address: 'seoul',
      fileName: 'file2',
      options: 'q'
    },{
      name: 'test3',
      phone: '010-3333-3333',
      address: 'seoul',
      fileName: 'file3',
      options: 'a'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test4',
      phone: '010-4444-4444',
      address: 'seoul',
      fileName: 'file4',
      options: 'b'
    },{
      name: 'test1',
      phone: '010-1111-1111',
      address: 'seoul',
      fileName: 'file1',
      options: 'r'
    },{
      name: 'test2',
      phone: '010-2222-2222',
      address: 'seoul',
      fileName: 'file2',
      options: 'q'
    },{
      name: 'test3',
      phone: '010-3333-3333',
      address: 'seoul',
      fileName: 'file3',
      options: 'a'
    }
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPerPage, setCurrentPerPage] = useState(10);
  const endPage = currentPage * currentPerPage - 1;
  const startPage = currentPage * currentPerPage - currentPerPage;
  let dataLength = fakeData.length;

  return (
    <DataListContainer>
      <DataNav num={dataLength} />
      <DataItemList>
        {fakeData && fakeData
        .filter((item, index) => index <= endPage && index >= startPage )
        .map((item)=> (
          <div className='card'>
            <DataCard 
              name={item.name} 
              phone={item.phone} 
              address={item.address} 
              options={item.options}
              fileName={item.fileName}
            />
          </div>
        ))}
      </DataItemList>
      <Pagination 
        totalItem={fakeData.length} 
        perPage={currentPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
    </DataListContainer>
  );
}

const DataListContainer = styled.div`
  background-color: #E2C4C9;
  height: auto;
  min-height: calc(100vh + 5px);
`;

const DataItemList = styled.article`
  width: calc(250px * 5 + 40px);
  min-height: calc(100vh - 550px);
  height: auto;
  background-color: #fff;
  margin: 3em auto 0;
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