const LeftArrow = ({ width, height, ...props }) => {
	return (
		<svg
			height={height}
			width={width}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			xmlSpace='preserve'
			{...props}
		>
			<path
				style={{
					fill: 'currentColor',
				}}
				d='M196.487 121.533v99.478h270.325c19.324 0 34.989 15.665 34.989 34.989 0 19.324-15.665 34.989-34.989 34.989H196.487v99.478c0 14.309-11.601 25.91-25.91 25.91a25.914 25.914 0 0 1-18.322-7.589L17.788 274.322A25.827 25.827 0 0 1 10.199 256a25.827 25.827 0 0 1 7.589-18.322l134.467-134.467a25.912 25.912 0 0 1 18.322-7.589c14.309.001 25.91 11.601 25.91 25.911z'
			/>
		</svg>
	);
};

export default LeftArrow;
