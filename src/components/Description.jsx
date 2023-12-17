import { Link, useLocation } from 'react-router-dom';

const Description = () => {
	const { state } = useLocation();

	return (
		<>
			<Link to={`${state.urlLocation.pathname}${state.urlLocation.search}`}>
				go back
			</Link>
			<div>
				<p>{state.description}</p>
			</div>
		</>
	);
};

export default Description;
