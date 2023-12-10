import { useEffect, useState } from 'react';

const Filter = ({
	fullTime,
	filterLocation,
	filterKeyWord,
	changeJobTime,
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

	return (
		<>
			<label>
				<span>City: </span>
				<input
					type='text'
					value={city}
					onChange={(ev) => {
						setCity(ev.target.value);
					}}
				/>
			</label>
			<label>
				<span>KeyWord to search </span>
				<input
					type='text'
					value={keyWord}
					onChange={(ev) => {
						setKeyWord(ev.target.value);
					}}
				/>
			</label>
			<label>
				<span>Full time job</span>
				<input type='checkbox' checked={!!fullTime} onChange={changeJobTime} />
			</label>
		</>
	);
};

export default Filter;
