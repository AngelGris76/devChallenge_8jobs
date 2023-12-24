import InputText from './InputText';
import InputRadioCity from './InputRadioCity';
import PortfolioIcon from './icons/PortfolioIcon';
import useFilter from '../hooks/useFilter';
import { CITIES } from '../values/cities';
import { FIELDTEXT } from '../values/filterFieldText';

const Filter = ({
	fullTime,
	filterLocation,
	filterKeyWord,
	changeJobTime,
	changeCityFilter,
	changeKeyWordFilter,
}) => {
	const { city, keyWord, setCity, setKeyWord } = useFilter({
		filterLocation,
		filterKeyWord,
		changeCityFilter,
		changeKeyWordFilter,
	});

	const citiesRadioButtons = CITIES.map((city) => (
		<InputRadioCity
			key={city}
			text={city}
			onChange={(newCity) => {
				setCity(newCity);
			}}
		/>
	));

	return (
		<>
			<div>
				<InputText
					startIcon={<PortfolioIcon width='24px' height='24px' />}
					text={FIELDTEXT.search}
					value={keyWord}
					onChange={(newKeyword) => {
						setKeyWord(newKeyword);
					}}
				/>
			</div>
			<div>
				<label>
					<span>Full time job</span>
					<input
						type='checkbox'
						checked={!!fullTime}
						onChange={changeJobTime}
					/>
				</label>
				<InputText
					text={FIELDTEXT.city}
					value={city}
					onChange={(newCity) => {
						setCity(newCity);
					}}
				/>
				<div>{citiesRadioButtons}</div>
			</div>
		</>
	);
};

export default Filter;
