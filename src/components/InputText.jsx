const InputText = ({ text, onChange, startIcon, ...props }) => {
	return (
		<label>
			<span>{text}</span>
			<span>{startIcon}</span>
			<input
				type='text'
				onChange={(ev) => onChange(ev.target.value)}
				{...props}
			/>
		</label>
	);
};

export default InputText;
