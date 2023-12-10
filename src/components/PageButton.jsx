const PageButton = ({ text, onClick }) => {
	return (
		<li>
			<button type='button' onClick={onClick}>
				{text}
			</button>
		</li>
	);
};

export default PageButton;
