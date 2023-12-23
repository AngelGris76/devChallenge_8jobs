const InputRadioCity = ({ text, onChange }) => {
	return (
		<label>
			<span>{text}</span>
			<input
				type='radio'
				name='cityRadio'
				value={text}
				onChange={(ev) => {
					onChange(ev.target.value);
				}}
			/>
		</label>
	);
};

export default InputRadioCity;
