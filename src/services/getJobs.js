const BASE_API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/';
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const getJobs = ({ page, location, keyWord, fullTime }) => {
	const hasLocation = !location ? '' : `&where=${location}`;
	const hasKeyWord = !keyWord ? '' : `&what=${keyWord}`;
	const isFullTime = !fullTime ? '' : `&full_time=1`;

	const API_URL = `${BASE_API_URL}${page.toString()}?app_id=${APP_ID}&app_key=${APP_KEY}${hasLocation}${hasKeyWord}${isFullTime}`;

	console.log(API_URL);
};

export default getJobs;
