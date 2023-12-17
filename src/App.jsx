import { Navigate, Route, Routes } from 'react-router-dom';
import SelectPage from './components/SelectPage';
import Filter from './components/Filter';
import Description from './components/Description';
import JobsList from './components/JobsList';
import useFilters from './hooks/useFilters';
import useJobs from './hooks/useJobs';

const App = () => {
	const {
		page,
		location,
		keyWord,
		fullTime,
		changePage,
		changeCityFilter,
		changeJobTime,
		changeKeyWordFilter,
	} = useFilters();

	const { jobs, refreshJobs } = useJobs({ page, location, keyWord, fullTime });

	return (
		<>
			<h1>Jobs search app</h1>
			<p>just for USA jobs</p>

			<Routes>
				<Route path='/' element={<Navigate to='/search?page=1' />} />
				<Route path='/description' element={<Description />} />
				<Route
					path='/search'
					element={
						<>
							<Filter
								fullTime={fullTime}
								filterLocation={location}
								filterKeyWord={keyWord}
								changeJobTime={(newTime) => {
									changeJobTime(newTime);
									refreshJobs();
								}}
								changeCityFilter={(newCity) => {
									changeCityFilter(newCity);
									refreshJobs();
								}}
								changeKeyWordFilter={(newKeyword) => {
									changeKeyWordFilter(newKeyword);
									refreshJobs();
								}}
							/>

							{jobs.searching && <p>buscando</p>}

							{!jobs.searching && !jobs.error && (
								<>
									<JobsList jobs={jobs.data} />
									<SelectPage
										totalPages={jobs.totalPages}
										actualPage={page}
										changePage={(newPage) => {
											changePage(newPage);
											refreshJobs();
										}}
									/>
								</>
							)}
							{!jobs.searching && jobs.error && (
								<p>search error, please try later</p>
							)}
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
