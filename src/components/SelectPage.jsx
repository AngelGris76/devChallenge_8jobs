import PageButton from './PageButton';

const SelectPage = ({ actualPage, changePage }) => {
	const decPage = (actualPage) => {
		const oldPage = parseInt(actualPage);
		if (oldPage === 1) return;
		const newPage = oldPage - 1;
		changePage(newPage);
	};

	const incPage = (actualPage) => {
		const oldPage = parseInt(actualPage);
		const newPage = oldPage + 1;
		changePage(newPage);
	};

	return (
		<ul>
			<PageButton text='<' onClick={() => decPage(actualPage)} />
			<PageButton text='1' onClick={() => changePage(1)} />
			<PageButton text='2' onClick={() => changePage(2)} />
			<PageButton text='3' onClick={() => changePage(3)} />
			<PageButton text='4' onClick={() => changePage(4)} />
			<PageButton text='5' onClick={() => changePage(5)} />
			<PageButton text='>' onClick={() => incPage(actualPage)} />
		</ul>
	);
};

export default SelectPage;
