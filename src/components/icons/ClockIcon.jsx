const ClockIcon = ({ width, height, ...props }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path fill='none' d='M0 0h24v24H0z' />
			<circle
				cx={12}
				cy={12}
				r={9}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 6v6l4.5 4.5'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default ClockIcon;
