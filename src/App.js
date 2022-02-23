import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DataList from './components/dataList/DataList';
// import Form from './components/form/Form';
// import CreatedForm from './components/createdFormst/CreatedForm';
import FormList from './components/formList/FormList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormList />}></Route>
        <Route path="/dataList" element={<DataList />}></Route>
        {/* <Route path="/form" element={<Form />}></Route>
        {/* <Route path="/form/:id" element={<Form />}></Route>
        <Route path="/createdForm" element={<CreatedForm />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
