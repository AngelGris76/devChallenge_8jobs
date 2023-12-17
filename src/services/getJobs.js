import { AbortError } from '../myErrors';

const BASE_API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/';
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const getJobs = async ({ page, location, keyWord, fullTime, signal }) => {
	const hasLocation = !location ? '' : `&where=${location}`;
	const hasKeyWord = !keyWord ? '' : `&what=${keyWord}`;
	const isFullTime = !fullTime ? '' : `&full_time=1`;

	const API_URL = `${BASE_API_URL}${page.toString()}?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=5${hasLocation}${hasKeyWord}${isFullTime}`;

	try {
		const response = await fetch(API_URL, { signal });
		const data = await response.json();

		return data;
	} catch (err) {
		if (err.name === 'AbortError') throw new AbortError('fetch cancelado');
		throw new Error('otro tipo de error');
	}
};

export default getJobs;
