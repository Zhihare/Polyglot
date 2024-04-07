import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterForm, FilterFormButton, SelectFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { customStylesBrand, customStylesPrice } from './styleSelect';
import { createArrayWithStep, languageLevels, languages } from './optionSelect';
import { AppDispatch } from '../../Redax/store';
import { getFilterTeachers, getTeachersListPag } from '../../Redax/teachersThank';
import { selectTeachers } from '../../Redax/teacherSelector';
import { setFilter, setLoadpage, setTeachers } from '../../Redax/teacherSlice';


// { cars, setFilter }
const FilterTeachers = () => {
   const dispatch: AppDispatch = useDispatch();

	const [language, setLanguage] = useState('');
	const [price, setPrice] = useState(10000);
	const [level, setLevel] = useState('');

    const teachers = useSelector(selectTeachers);
    const prices = createArrayWithStep();

        



	// const handleCustomInputChange = (e:any, setInput:any) => {
	// 	setInput(e.target.value);

	// };

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