import { useEffect, useState } from 'react';

const useFilter = ({
	filterLocation,
	filterKeyWord,
	changeCityFilter,
	changeKeyWordFilter,
}) => {
	const [city, setCity] = useState(() => {
		return filterLocation ? filterLocation : '';
	});

	const [keyWord, setKeyWord] = useState(() => {
		return filterKeyWord ? filterKeyWord : '';
	});

	useEffect(() => {
		if (city === filterLocation) return;
		if (city === '' && !filterLocation) return;
		const timeoutCityID = setTimeout(() => {
			changeCityFilter(city);
		}, 300);
		return () => {
			clearTimeout(timeoutCityID);
		};
	}, [city, changeCityFilter, filterLocation]);

	useEffect(() => {
		if (keyWord === filterKeyWord) return;
		if (keyWord === '' && !filterKeyWord) return;
		const timeoutKeyWordID = setTimeout(() => {
			changeKeyWordFilter(keyWord);
		}, 300);
		return () => {
			clearTimeout(timeoutKeyWordID);
		};
	}, [keyWord, changeKeyWordFilter, filterKeyWord]);

	return { city, keyWord, setCity, setKeyWord };
};

export default useFilter;
