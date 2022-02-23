import React from 'react';
import styled from 'styled-components'

export const Pagination = (props) => {

	const { totalItem, currentPage, setCurrentPage, perPage } = props;

	const totalPage = Math.ceil(totalItem / perPage);

	const handlePage = (page) => {
		setCurrentPage(page)
	}

	return (
		<Conatiner>
			{[...Array(totalPage)].map((page, index) => (
				<div
					key={index}
					className={`page ${currentPage === index+1 ? 'active' : ''}`}
					onClick={() => handlePage(index+1)}
				>{index+1}</div>
			))}
		</Conatiner>
	)
}

const Conatiner = styled.div`
	max-width: 300px;
	width: auto;
	height: auto;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 5px;

	.page {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: lightgray;
		background-color: #f8f9fa;
		border-radius: 5px;
		cursor: pointer;
		margin-left: 2px;
		margin-right: 2px;
	}

	.active {
		color: black;
	}
`