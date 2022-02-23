import React from "react";
import "./App.css";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import CreatedForm from "./components/createdForm/CreatedForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataList from "./components/dataList/DataList";
import FormList from "./components/formList/FormList";
import { newForm } from "./components/createdForm/FormData";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormList />} />
          <Route path="/dataList" element={<DataList />} />
          {/*<AddressInput />*/}
          {/* <Route path="/form" element={<Form />}></Route> */}
          {/* <Route path="/form/:id" element={<Form />}></Route> */}
          <Route
            path="/createdForm"
            element={<CreatedForm newForm={newForm} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
