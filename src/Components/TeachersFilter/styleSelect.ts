
export const customStylesBrand = {
	menu: (provided:any, state:any) => ({
		...provided,

	}),

	singleValue: (provided:any, state:any) => ({
		...provided,

	}),
	dropdownIndicator: (provided:any, state:any) => ({
		...provided,
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
		transition: 'transform 0.3s ease',
		color: 'rgb(18, 20, 23)',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	control: (provided:any, state:any) => ({
		...provided,
		height: 48,
		width: 220,
		border: state.isFocused ? 0 : 0,
		boxShadow: state.isFocused ? 0 : 0,
		'&:hover': {
			border: state.isFocused ? 0 : 0,
		},
		borderRadius: '10px',
		backgroundColor: '#F7F7FB',
		color: '#121417',
		marginTop: '8px',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',

	}),
	placeholder: (provided:any) => ({
		...provided,
		color: '#121417',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

	input: (provided:any, state:any) => ({
		...provided,
		color: '#121417',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

};




export const customStylesPrice = {
	menu: (provided:any, state:any) => ({
		...provided,

	}),

	singleValue: (provided:any, state:any) => ({
		...provided,

	}),
	dropdownIndicator: (provided:any, state:any) => ({
		...provided,
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
		transition: 'transform 0.3s ease',
		color: 'rgb(18, 20, 23)',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	control: (provided:any, state:any) => ({
		...provided,
		height: 48,
		width: 125,
		border: state.isFocused ? 0 : 0,
		boxShadow: state.isFocused ? 0 : 0,
		'&:hover': {
			border: state.isFocused ? 0 : 0,
		},
		borderRadius: '10px',
		backgroundColor: '#F7F7FB',
		color: '#121417',
		marginTop: '8px',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',

	}),
	placeholder: (provided:any) => ({
		...provided,
		color: '#121417',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

	input: (provided:any, state:any) => ({
		...provided,
		color: '#121417',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

};