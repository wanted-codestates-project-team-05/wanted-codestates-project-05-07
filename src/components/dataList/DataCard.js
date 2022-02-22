import React from 'react';
import styled from 'styled-components';

export const DataCard = (props) => {

	const { name, phone, address, options, fileName } = props;

	const Box = (label, data) => {

		return (
			<div className='data-box'>
				<div className='label'>{label}</div>
				<div className='data'>{data}</div>
			</div>
		)
	}

	return (
		<Container>
			{name ? Box('이름', name) : ''}
			{phone ? Box('휴대폰', phone) : ''}
			{address ? Box('주소', address) : ''}
			{options ? Box('옵션', options) : ''}
			{fileName ? Box('첨부파일', fileName) : ''}
		</Container>
	)
}

const Container = styled.div`
	width: 240px;
	min-height: 300px;
	height: auto;
	border-radius: 5px;
	display: inline-flex;
	/* border: 1px solid lightgray; */
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	flex-direction: column;
	box-sizing: border-box;
	padding: 10px;

	.data-box {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: column;
		margin-bottom: 5px;

		.label {
			width: 100%;
			font-size: 13px;
			text-align: start;

		}

		.data {
			width: 100%;
			height: 30px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-radius: 5px;
			box-sizing: border-box;
			padding-left: 10px;
			padding-right: 10px;
			/* border: 1px solid lightgray; */
			background-color: #f8f9fa;
		}

	}
`
