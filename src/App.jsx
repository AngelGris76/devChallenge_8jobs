import { useEffect } from 'react';
import {
	Link,
	Navigate,
	Route,
	Routes,
	useLocation,
	useSearchParams,
} from 'react-router-dom';
import SelectPage from './components/SelectPage';
import Filter from './components/Filter';
import Description from './components/Description';
import JobsList from './components/JobsList';

const App = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const params = Object.fromEntries(searchParams.entries());
	const filter = {
		page: params.page,
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

	useEffect(() => {}, [
		filter.page,
		filter.location,
		filter.keyWord,
		filter.fullTime,
	]);

	return (
		<>
			<h1>Jobs search app</h1>
			<Link to='/description' state={{ estado: location }}>
				go to description
			</Link>
			<Routes>
				<Route path='/' element={<Navigate to='/search?page=1' />} />
				<Route path='/description' element={<Description />} />
				<Route
					path='/search'
					element={
						<>
							<Filter
								fullTime={filter.fullTime}
								filterLocation={filter.location}
								filterKeyWord={filter.keyWord}
								changeJobTime={changeJobTime}
								changeCityFilter={changeCityFilter}
								changeKeyWordFilter={changeKeyWordFilter}
							/>
							<JobsList />
							<SelectPage actualPage={filter.page} changePage={changePage} />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
