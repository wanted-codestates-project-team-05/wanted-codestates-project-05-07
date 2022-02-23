import React, { useState } from 'react';
import DataList from './components/dataList/DataList';
import FormList from './components/formList/FormList';
import { DataNav } from './components/dataList/DataNav';

export const Home = () => {

	const [showPage, setShowPage] = useState(false);

	const moveDataListPage = () => {
		setShowPage(true)
	}

	const moveFormListPage = () => {
		setShowPage(false)
	}
	

	return (
		<>
			<DataNav dataLength={10} show={showPage} moveDataListPage={moveDataListPage} moveFormListPage={moveFormListPage}/>
			{showPage ? <DataList/> : <FormList/>}
		</>
	)
}