import React, {useState } from 'react';
import Select from 'react-select';
import { FilterForm, FilterFormButton } from './Filter.styled';
import { useDispatch} from 'react-redux';
import { customStylesBrand, customStylesPrice } from './styleSelect';
import { createArrayWithStep, languageLevels, languages } from './optionSelect';
import { AppDispatch } from '../../Redax/store';
import { getFilterTeachers } from '../../Redax/teachersThank';
import { setFilter, setLoadpage} from '../../Redax/teacherSlice';


const FilterTeachers = () => {
   const dispatch: AppDispatch = useDispatch();

	const [language, setLanguage] = useState('');
	const [price, setPrice] = useState(10000);
	const [level, setLevel] = useState('');

    const prices = createArrayWithStep();

    

	const handleSubmit = (e:any) => {
        e.preventDefault();
		dispatch(setLoadpage(2));
		dispatch(setFilter([]));
        dispatch(getFilterTeachers({ language, level, price }));
	};


	return (
        <div>
			<FilterForm onSubmit={handleSubmit}>
				<label>
					Languages
					<Select
						options={languages}
						isSearchable
						isClearable
						placeholder="Enter the text..."
						styles={customStylesBrand}
						onChange={(e) =>
							setLanguage(e ? e.value : '')}
					/>
                </label>
                <label>
					Level of knowledge
					<Select
						options={languageLevels}
						isSearchable
						isClearable
						placeholder="Сhoose a level"
						styles={customStylesBrand}
						onChange={(e) =>
							setLevel(e ? e.value : '')}
					/>

				</label>
				<label>
					Price
					<Select
						options={prices}
						isSearchable
						isClearable
						placeholder="To$"
						styles={customStylesPrice}
						onChange={(e) =>
							setPrice(e ? e.value : 10000)}
					/>

				</label>
				<FilterFormButton type="submit">Search</FilterFormButton>
			</FilterForm>
		</div>
	);
};

export default FilterTeachers;