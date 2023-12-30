import style from './InputRadioCity.module.css';

const InputRadioCity = ({ text, onChange }) => {
	return (
		<label className={style.inputContainer}>
			<span>{text}</span>
			<input
				className={style.radio}
				type='radio'
				name='cityRadio'
				value={text}
				onChange={(ev) => {
					onChange(ev.target.value);
				}}
			/>
			<span className={style.emulateRadio}></span>
		</label>
	);
};

export default InputRadioCity;
