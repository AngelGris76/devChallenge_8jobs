const PageButton = ({ text, onClick, ...props }) => {
	return (
		<li>
			<button type='button' {...props} onClick={onClick}>
				{text}
			</button>
		</li>
	);
};

export default PageButton;
