import { useEffect, useState } from 'react';
import getJobs from '../services/getJobs';

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
		getJobs({
			page,
			location,
			keyWord,
			fullTime,
		})
			.then((result) => {
				console.log('salgo de la promesa con API', result);
				setJobs((prev) => ({ ...prev, searching: false }));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [page, location, keyWord, fullTime, jobs.searching]);

	return { jobs, refreshJobs };
};

export default useJobs;
