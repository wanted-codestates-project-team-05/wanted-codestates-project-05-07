import React from "react";
import "./App.css";
import "./reset.css";
import AddressInput from "./components/createdForm/AddressInput";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import SubForm from "./components/createdForm/SubForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataList from "./components/dataList/DataList";
import FormList from "./components/formList/FormList";
import Form from "./components/Form";
import CreatedForm from "./components/createdForm/CreatedForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormList />} />
          <Route path="/dataList" element={<DataList />} />
          <SubForm />
          <AddressInput />
          <Route path="/form" element={<Form />}></Route>
          <Route path="/form/:id" element={<Form />}></Route>
          <Route path="/createdForm" element={<CreatedForm />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Form />
    </ThemeProvider>
  );
}

export default App;
