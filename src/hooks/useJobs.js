import { useEffect, useState } from 'react';
import getJobs from '../services/getJobs';
import { AbortError } from '../myErrors';

const useJobs = ({ page, location, keyWord, fullTime }) => {
	const [jobs, setJobs] = useState({
		data: [],
		totalPages: 0,
		searching: true,
	});

	const refreshJobs = () => {
		setJobs((prev) => ({ ...prev, searching: true }));
	};

	useEffect(() => {
		if (!jobs.searching) return;

		const jobsController = new AbortController();

		getJobs({
			page,
			location,
			keyWord,
			fullTime,
			signal: jobsController.signal,
		})
			.then((result) => {
				const totalPages = Math.ceil(result.count / 5);
				const data = result.results;
				setJobs({ totalPages, data, searching: false });
			})
			.catch((err) => {
				if (err instanceof AbortError)
					return console.log('react strict mode cancel fetch');
				console.log(err.message);
			});

		return () => {
			jobsController.abort();
		};
	}, [page, location, keyWord, fullTime, jobs.searching]);

	return { jobs, refreshJobs };
};

export default useJobs;
