import { Link, useLocation } from 'react-router-dom';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';

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
				<div>
					<img src='' alt={`${company} logo`} />
				</div>
				<div>
					<span>{company}</span>
					<span>{title}</span>
					{isFullTime && <span>{contractType}</span>}
				</div>
				<div>
					<span>
						<LocationIcon width='24px' height='24px' />
						{location}
					</span>
					<span>
						<ClockIcon width='24px' height='24px' />
						{created}
					</span>
				</div>
			</Link>
		</li>
	);
};

export default JobResume;
