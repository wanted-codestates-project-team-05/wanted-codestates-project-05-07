import React from "react";
import "./App.css";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import CreatedForm from "./components/createdForm/CreatedForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataList from "./components/dataList/DataList";
import { newForm } from "./components/createdForm/FormData";
import AgreementForm from "./components/createdForm/AgreementForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/createdForm"
            element={<CreatedForm newForm={newForm} />}
          />
          <Route
            path="/createdForm/openAgreement"
            element={<AgreementForm />}
          />
          <Route path="/dataList" element={<DataList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
