import React, { useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import CreatedForm from "./components/createdForm/CreatedForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { dummyResponse, dummyForms } from "./data/dummies";
import AgreementForm from "./components/createdForm/AgreementForm";
import Form from "./components/Form";

function App() {
  const [forms, setForms] = useState([]);
  const [currentForm, setCurrentForm] = useState();
  const [dataList, setDataList] = useState(dummyResponse);
  const [clickId, setClickId] = useState(0);

  useEffect(() => {
    setDataList(dummyResponse);
  }, []);

  useEffect(() => {
    setForms(dummyForms);
  }, []);

  const [formAnswer, setFormAnswer] = useState();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                dataList={dataList}
                setDataList={setDataList}
                forms={forms}
                setForms={setForms}
                setClickId={setClickId}
              />
            }
          />
          <Route
            path="/createdForm"
            element={
              <CreatedForm
                newForm={dummyForms[clickId]}
                setFormAnswer={setDataList}
                currentDataList={dataList}
              />
            }
          />
          <Route
            path="/createdForm/openAgreement"
            element={<AgreementForm />}
          />
          <Route
            path="/form"
            element={<Form forms={forms} setForms={setForms} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
