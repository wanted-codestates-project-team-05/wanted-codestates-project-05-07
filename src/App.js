import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataList from "./components/dataList/DataList";
import FormList from "./components/formList/FormList";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormList />} />
        <Route path="/dataList" element={<DataList />} />
        {/* <Route path="/form" element={<Form />}></Route>
        {/* <Route path="/form/:id" element={<Form />}></Route>
        <Route path="/createdForm" element={<CreatedForm />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
