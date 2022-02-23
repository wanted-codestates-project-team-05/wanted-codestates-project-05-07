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
	height: 50px;
	display: flex;
	justify-content: center;
	margin: 0 auto;

	.page {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.active {
		color: white;
	}
`