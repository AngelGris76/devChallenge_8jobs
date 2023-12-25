const PortfolioIcon = ({ width, height, ...props }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M28 10h-6V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2ZM12 6h8v4h-8ZM4 26V12h24v14Z'
				stroke='currentColor'
				fill='none'
			/>
			<path
				data-name='&lt;Transparent Rectangle&gt;'
				style={{
					fill: 'none',
				}}
				d='M0 0h32v32H0z'
			/>
		</svg>
	);
};

export default PortfolioIcon;
