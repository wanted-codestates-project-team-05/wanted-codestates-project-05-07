import React, { useState, useEffect } from 'react';
import DataList from './components/dataList/DataList';
import FormList from './components/formList/FormList';
import { DataNav } from './components/dataList/DataNav';

export const Home = (props) => {
	//여기서 데이터 뿌려주면 됩니다.

	const { dataList, setDataList, forms, setForms} = props;

	const [showPage, setShowPage] = useState(false);

	const moveDataListPage = () => {
		setShowPage(true)
	}

	const moveFormListPage = () => {
		setShowPage(false)
	}
	
	return (
		<>
			<DataNav show={showPage} moveDataListPage={moveDataListPage} moveFormListPage={moveFormListPage}/>
			{showPage ? <DataList dataList={dataList} setDataList={setDataList}/> : <FormList forms={forms} setForms={setForms}/>}
		</>
	)
}