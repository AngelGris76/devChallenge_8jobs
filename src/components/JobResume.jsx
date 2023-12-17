import { Link, useLocation } from 'react-router-dom';

const JobResume = ({
	company,
	location,
	created,
	contractType,
	title,
	description,
}) => {
	const isFullTime = contractType === 'full_time';
	const urlLocation = useLocation();

	return (
		<li>
			<Link to='/Description' state={{ description, urlLocation }}>
				<span>{company}</span>
				<span>{title}</span>
				<span>{location}</span>
				<span>{created}</span>
				{isFullTime && <span>{contractType}</span>}
			</Link>
		</li>
	);
};

export default JobResume;
