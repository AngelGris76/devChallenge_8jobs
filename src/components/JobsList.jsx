import JobResume from './JobResume';

const JobsList = ({ jobs }) => {
	console.log(jobs);

	const renderedJobs = jobs.map((job) => (
		<JobResume
			key={job.id}
			company={job.company.display_name}
			location={job.location.display_name}
			created={job.created}
			contractType={job.contract_time}
			title={job.title}
			description={job.description}
		/>
	));

	return (
		<ul>
			{renderedJobs}
			{/*
			<JobResume
				company={job.company.display_name}
				location={job.location}
				created={job.created}
				contractType={job.contract}
			/>
	*/}
		</ul>
	);
};

export default JobsList;
