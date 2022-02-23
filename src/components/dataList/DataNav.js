import React from 'react';
import styled from 'styled-components';

export function DataNav({moveDataListPage, moveFormListPage, show}) {

  return (
    <DataHeader>
      <ul>
        <li className={`li-first ${show ? '' : 'active'}`}  onClick={moveFormListPage}>
          <p>폼 생성 목록</p>
        </li>
        <li className={`li-first ${show ? 'active' : ''}`} onClick={moveDataListPage}>
          <p>데이터 목록</p>
        </li>
      </ul>
    </DataHeader>
  );
}

const DataHeader = styled.header`
  position: relative;
  background-color: #fff;
  margin: 0 auto;
  height: 7em;
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.07) 1.95px 1.95px 2.6px;
  .data-tit {
    display: flex;
    align-items: center;
    .icon-img {
      width: 35px;
      margin: 0 0.1em 0 1em;
    }
    h1 {
      background: url('') no-repeat;
      background-size: 40px 40px;
      font-size: 1.5em;
      font-weight: 400;
    }
  }
  ul {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    li {
      display: inline-block;
      list-style: none;
      padding-left: 0;
      font-size: 1.4em;
      background-color: inherit;
      border: none;
      p {
        margin: 0;
      }
    }
    .li-first {
      margin-right: 30px;
    }
    .active {
      padding-bottom: 5px;
      color: #ff4161;
      border-bottom: 3px solid #ff4161;
      box-sizing: border-box;
    }
  }
`;
