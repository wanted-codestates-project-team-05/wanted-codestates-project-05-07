import React from "react";
import styled from "styled-components";

const Navigator = styled.nav`
  margin-top: 20px;
  width: 100px;
  height: 50px;
`;

const Numbers = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
`;

const Number = styled.li`
  font-size: 18px;
  cursor: pointer;
  font-weight: ${(props) => (props.currentPage ? 900 : 400)};
  color: ${(props) => (props.currentPage ? "#304ffd" : "#000000")};
`;

export default function Pagination({
  formsPerPage,
  totalForms,
  paginate,
  currentPage,
}) {
  const formNumbers = [];
  for (let i = 1; i <= Math.ceil(totalForms / formsPerPage); i++) {
    formNumbers.push(i);
  }
  return (
    <Navigator>
      <Numbers>
        {formNumbers.map((number) => (
          <Number
            currentPage={number === currentPage}
            onClick={() => paginate(number)}
            key={number}
          >
            {number}
          </Number>
        ))}
      </Numbers>
    </Navigator>
  );
}
