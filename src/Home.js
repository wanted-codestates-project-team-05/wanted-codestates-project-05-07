import React, { useState, useEffect } from 'react';
import DataList from './components/dataList/DataList';
import FormList from './components/formList/FormList';
import { DataNav } from './components/dataList/DataNav';
import { dummyResponse, dummyForms } from './data/dummies';

export const Home = () => {
	//여기서 데이터 뿌려주면 됩니다.

	const [showPage, setShowPage] = useState(false);
	const [forms, setForms] = useState([]);
	const [dataList ,setDataList] = useState(dummyResponse);

	const moveDataListPage = () => {
		setShowPage(true)
	}

	const moveFormListPage = () => {
		setShowPage(false)
	}

	useEffect(() => {
    setDataList(dummyResponse)
  }, [])

	useEffect(() => {
    setForms(dummyForms);
  }, []);
	

	return (
		<>
			<DataNav show={showPage} moveDataListPage={moveDataListPage} moveFormListPage={moveFormListPage}/>
			{showPage ? <DataList dataList={dataList} setDataList={setDataList}/> : <FormList forms={forms} setForms={setForms}/>}
		</>
	)
}