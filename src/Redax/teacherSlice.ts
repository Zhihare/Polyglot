import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getFilterTeachers, getTeachersList, getTeachersListPag } from './teachersThank';




export interface TeachersState {
    teachers: any[];
    favorites: any[];
  isLoading: boolean;
  error: string | null;
  filter: string| null;
    loadpage: number;
    modal: boolean;
    modalData: any
}


const initialState: TeachersState = {
    teachers: [],
    favorites: [],

	isLoading: true,
	error: null,

	filter: null,
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
				car => car.id !== action.payload
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
			.addCase(getTeachersListPag .fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.teachers = state.teachers.concat(action.payload);
			})

			.addCase(getTeachersList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.teachers = action.payload;
			})

			.addCase(getFilterTeachers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.filter = action.payload;
			})

			.addMatcher(
				isAnyOf(
					getFilterTeachers.pending,
					getTeachersList.pending,
					getFilterTeachers.pending,
				), state => {
					state.isLoading = true;
				})
			.addMatcher(
				isAnyOf(
					getFilterTeachers.rejected,
					getTeachersList.rejected,
					getFilterTeachers.rejected,
				), (state:any, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
});

export const teachersReducer = teachersSlice.reducer;
export const { addFavorites, setIsLoading, removeFavorites, setFilter, setModal, setModalData, setLoadpage, setTeachers, setFavorites } = teachersSlice.actions;