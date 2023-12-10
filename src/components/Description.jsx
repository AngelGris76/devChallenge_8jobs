import { Link, useLocation } from 'react-router-dom';

const Description = () => {
	const { state } = useLocation();

	return (
		<>
			<Link to={`${state.estado.pathname}${state.estado.search}`}>go back</Link>
			<div>
				<h2>Job description</h2>
			</div>
		</>
	);
};

export default Description;
