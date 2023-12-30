import { Link, useLocation } from 'react-router-dom';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';
import style from './JobResume.module.css';

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
			<Link
				className={style.listLink}
				to='/Description'
				state={{
					company,
					location,
					created,
					contractType,
					title,
					description,
					urlLocation,
				}}
			>
				<div className={style.logoContainer}>
					<img className={style.logImg} src='' alt={`${company} logo`} />
				</div>
				<div className={style.jobText}>
					<span className={style.jobCompany}>{company}</span>
					<span className={style.jobPosition}>{title}</span>
					{isFullTime && <span className={style.jobContract}>Full time</span>}
				</div>
				<div className={style.jobPost}>
					<span className={style.jobLocation}>
						<LocationIcon width='24px' height='24px' />
						{location.substr(0, location.indexOf(','))}
					</span>
					<span className={style.jobCreated}>
						<ClockIcon width='24px' height='24px' />
						{created.substr(0, created.indexOf('T'))}
					</span>
				</div>
			</Link>
		</li>
	);
};

export default JobResume;
