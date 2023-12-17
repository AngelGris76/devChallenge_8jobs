import { useSearchParams } from 'react-router-dom';

const useFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const params = Object.fromEntries(searchParams.entries());
	const filter = {
		page: parseInt(params.page) || 1,
		location: params.location || null,
		keyWord: params.keyword || null,
		fullTime: params.full_time || null,
	};

	const changePage = (newPage) => {
		const stringPage = newPage.toString();
		setSearchParams((prev) => {
			prev.set('page', stringPage);
			return prev;
		});
	};

	const changeJobTime = () => {
		setSearchParams((prev) => {
			if (filter.fullTime) prev.delete('full_time');
			else prev.set('full_time', 1);
			return prev;
		});
	};

	const changeCityFilter = (newCity) => {
		setSearchParams((prev) => {
			if (!newCity) prev.delete('location');
			else prev.set('location', newCity);
			return prev;
		});
	};

	const changeKeyWordFilter = (newKeyWord) => {
		setSearchParams((prev) => {
			if (!newKeyWord) prev.delete('keyword');
			else prev.set('keyword', newKeyWord);
			return prev;
		});
	};

	return {
		...filter,
		changePage,
		changeJobTime,
		changeCityFilter,
		changeKeyWordFilter,
	};
};

export default useFilters;
