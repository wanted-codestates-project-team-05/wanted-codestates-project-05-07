import React, {useEffect, useState} from "react";
import "./App.css";
import "./reset.css";
import AddressInput from "./components/createdForm/AddressInput";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
// import SubForm from "./components/createdForm/SubForm";
import CreatedForm from './components/createdForm/CreatedForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { dummyResponse, dummyForms } from './data/dummies';
import DataList from "./components/dataList/DataList";
import FormList from "./components/formList/FormList";
import Form from "./components/Form";
import CreatedForm from "./components/createdForm/CreatedForm";

function App() {

  const [forms, setForms] = useState([]);
	const [dataList ,setDataList] = useState(dummyResponse);

  useEffect(() => {
    setDataList(dummyResponse)
  }, [])

	useEffect(() => {
    setForms(dummyForms);
  }, []);


  return (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dataList={dataList} setDataList={setDataList} forms={forms} setForms={setForms}/>} />
        {/* <Route path="/dataList" element={<DataList />} /> */}
        {/*<SubForm />*/}
        {/*<AddressInput />*/}
        {/* <Route path="/form" element={<Form />}></Route>
        {/* <Route path="/form/:id" element={<Form />}></Route>
        <Route path="/createdForm" element={<CreatedForm />}></Route> */}
        <Route path="/createdForm" element={<CreatedForm />}></Route>
      </Routes>
    </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
