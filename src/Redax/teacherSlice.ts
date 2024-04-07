import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getFilterTeachers, getTeachersListPag } from './teachersThank';




export interface TeachersState {
    teachers: any[];
    favorites: any[];
  	isLoading: boolean;
  	error: string | null;
  	filter: any[];
    loadpage: number;
    modal: boolean;
    modalData: any
}


const initialState: TeachersState = {
    teachers: [],
    favorites: [],

	isLoading: false,
	error: null,

	filter: [],
	loadpage: 2,

	modal: false,
	modalData: null,


};

const teachersSlice = createSlice({
	name: 'teachers',
	initialState,

	reducers: {
		setTeachers(state, action) {
			state.teachers = action.payload;
		},



		addFavorites(state, action) {
			state.favorites.push(action.payload);
		},

		removeFavorites(state, action) {
			state.favorites = state.favorites.filter(
				teacher => teacher.lesson_info !== action.payload
			);
		},
		
		setFavorites(state, action) {
			state.favorites = action.payload;
		},


		setLoadpage(state, action) {
			state.loadpage = action.payload;
		},


		setFilter(state, action) {
			state.filter = action.payload;
		},

		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},


		setModal(state, action) {
			state.modal = action.payload;
		},

		setModalData(state, action) {
			state.modalData = action.payload;
		},
	},

	extraReducers: builder => {
		builder
			.addCase(getTeachersListPag.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.teachers = state.teachers.concat(action.payload);
			})
			.addCase(getFilterTeachers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.filter = action.payload;
			})

			.addMatcher(
				isAnyOf(
					getFilterTeachers.pending,
					getFilterTeachers.pending,
				), state => {
					state.isLoading = false;
				})
			.addMatcher(
				isAnyOf(
					getFilterTeachers.rejected,
					getFilterTeachers.rejected,
				), (state:any, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
});

export const teachersReducer = teachersSlice.reducer;
export const { addFavorites, setIsLoading, removeFavorites, setFilter, setModal, setModalData, setLoadpage, setTeachers, setFavorites } = teachersSlice.actions;