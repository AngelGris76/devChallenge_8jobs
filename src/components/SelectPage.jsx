import PageButton from './PageButton';

const SelectPage = ({ totalPages, actualPage, changePage }) => {
	const decPage = (actualPage) => {
		if (actualPage === 1) return;
		const newPage = actualPage - 1;
		changePage(newPage);
	};

	const incPage = (actualPage) => {
		const newPage = actualPage + 1;
		changePage(newPage);
	};

	const buttons = generateButtons({ actualPage, totalPages });

	const renderedButtons = buttons.map((button) => (
		<PageButton
			key={button}
			text={button}
			aria-pressed={button === actualPage}
			onClick={() => changePage(button)}
		/>
	));

	return (
		<ul>
			<PageButton
				text='<'
				disabled={actualPage === 1}
				onClick={() => decPage(actualPage)}
			/>
			{renderedButtons}
			<PageButton
				text='>'
				disabled={actualPage === totalPages}
				onClick={() => incPage(actualPage)}
			/>
		</ul>
	);
};

export default SelectPage;

const generateButtons = ({ actualPage, totalPages }) => {
	let buttons = [1, 2, 3, 4, 5];

	if (actualPage >= 4 && actualPage <= totalPages - 2)
		buttons = [
			actualPage - 2,
			actualPage - 1,
			actualPage,
			actualPage + 1,
			actualPage + 2,
		];

	if (actualPage === totalPages - 1)
		buttons = [
			actualPage - 3,
			actualPage - 2,
			actualPage - 1,
			actualPage,
			actualPage + 1,
		];

	if (actualPage === totalPages)
		buttons = [
			actualPage - 4,
			actualPage - 3,
			actualPage - 2,
			actualPage - 1,
			actualPage,
		];

	return [...buttons];
};
