import style from './PageButton.module.css';

const PageButton = ({ text, onClick, ...props }) => {
	return (
		<li>
			<button
				className={style.pageButton}
				type='button'
				{...props}
				onClick={onClick}
			>
				{text}
			</button>
		</li>
	);
};

export default PageButton;
