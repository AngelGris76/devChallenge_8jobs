import { Link, useLocation } from 'react-router-dom';
import ClockIcon from './icons/ClockIcon';
import LocationIcon from './icons/LocationIcon';
import style from './Description.module.css';
import LeftArrow from './icons/LeftArrow';

const Description = () => {
	const { state } = useLocation();
	const isFullTime = state.contractType === 'full_time';

	return (
		<section className={style.section}>
			<Link
				className={style.link}
				to={`${state.urlLocation.pathname}${state.urlLocation.search}`}
			>
				<LeftArrow width='24px' height='24px' />
				<span>Back to search</span>
			</Link>
			<div>
				<h2 className={style.title}>
					{state.title}
					{isFullTime && <span className={style.contractType}>Full time</span>}
				</h2>
				<p className={style.createdTime}>
					<ClockIcon width='24px' height='24px' />
					<span>{state.created.substr(0, state.created.indexOf('T'))}</span>
				</p>
				<div className={style.companyPost}>
					<div className={style.logoContainer}>
						<img
							className={style.logImg}
							src=''
							alt={`${state.company} logo`}
						/>
					</div>
					<p>
						<span>{state.company}</span>
						<div className={style.jobLocation}>
							<LocationIcon width='24px' height='24px' />
							<span>
								{state.location.substr(0, state.location.indexOf(','))}
							</span>
						</div>
					</p>
				</div>
				<p>{state.description}</p>
			</div>
		</section>
	);
};

export default Description;
