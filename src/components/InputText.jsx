const InputText = ({ text, onChange, ...props }) => {
	return (
		<label>
			<span>{text}</span>
			<input
				type='text'
				onChange={(ev) => onChange(ev.target.value)}
				{...props}
			/>
		</label>
	);
};

export default InputText;
