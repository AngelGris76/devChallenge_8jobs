import InputText from './InputText';
import InputRadioCity from './InputRadioCity';
import PortfolioIcon from './icons/PortfolioIcon';
import LocationIcon from './icons/LocationIcon';
import useFilter from '../hooks/useFilter';
import { CITIES } from '../values/cities';
import { FIELDTEXT } from '../values/filterFieldText';
import style from './Filter.module.css';

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
			<div className={style.searchContainer}>
				<InputText
					startIcon={<PortfolioIcon width='24px' height='24px' />}
					placeholder={FIELDTEXT.search}
					value={keyWord}
					onChange={(newKeyword) => {
						setKeyWord(newKeyword);
					}}
				/>
			</div>
			<div>
				<label className={style.checkboxContainer}>
					<input
						className={style.checkbox}
						type='checkbox'
						checked={!!fullTime}
						onChange={changeJobTime}
					/>
					<span className={style.emulateCheckbox}></span>
					<span>Full time</span>
				</label>
				<h2 className={style.locationHeader}>location</h2>
				<InputText
					startIcon={<LocationIcon width='24px' height='24px' />}
					placeholder={FIELDTEXT.city}
					value={city}
					onChange={(newCity) => {
						setCity(newCity);
					}}
				/>
				<div className={style.radioCityContainer}>{citiesRadioButtons}</div>
			</div>
		</>
	);
};

export default Filter;
