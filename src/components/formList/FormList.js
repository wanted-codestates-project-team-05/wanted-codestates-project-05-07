import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../commonComponents/Pagination";
import { useNavigate } from "react-router";

const Background = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 3em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  border: 2px solid lightgray;
  border-radius: 10px;
  width: 600px;
  > div:not(:first-child) {
    border-top: 2px solid lightgray;
  }
`;

const ListItem = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 30px;
  padding: 15px 20px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #304ffd;
  font-weight: 700;
  color: #304ffd;
`;

const Icon = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FormList({ forms, setForms, setClickId }) {
  // const [forms, setForms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formsPerPage] = useState(5);

  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;
  const currentForms = forms.slice(indexOfFirstForm, indexOfLastForm);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let navigate = useNavigate();

  const handleClick = (id) => {
    setClickId(id);
    navigate(`/createdForm`);
  };

  useEffect(() => {
    setForms(forms);
  }, [forms, setForms]);

  return (
    <Background>
      {/* <Title>폼 생성 목록</Title> */}
      <Container>
        {currentForms.map((each) => (
          <ListItem key={each.id} onClick={() => handleClick(each.id - 1)}>
            <Icon><ion-icon name="document-text" /></Icon>
            <ListTitle>{each.title}</ListTitle>
          </ListItem>
        ))}
      </Container>
      <Pagination
        currentPage={currentPage}
        formsPerPage={formsPerPage}
        totalForms={forms.length}
        paginate={paginate}
      />
      <Link to="/form">
        <Button>폼 생성</Button>
      </Link>
    </Background>
  );
}
