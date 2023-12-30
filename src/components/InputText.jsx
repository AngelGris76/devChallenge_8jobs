import style from './InputText.module.css';

const InputText = ({ text, onChange, startIcon, ...props }) => {
	return (
		<label className={style.inputContainer}>
			<span>{text}</span>
			<span className={style.startIcon}>{startIcon}</span>
			<input
				className={style.textInput}
				type='text'
				onChange={(ev) => onChange(ev.target.value)}
				{...props}
			/>
		</label>
	);
};

export default InputText;
