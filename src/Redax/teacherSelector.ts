import { RootState } from './store';


export const selectTeachers = (state: RootState) => state.teachers.teachers;
export const selectFavorites = (state: RootState) => state.teachers.favorites;

export const selectFilter = (state: RootState) => state.teachers.filter;

export const selectModal = (state: RootState) => state.teachers.modal;
export const selectModalData = (state: RootState) => state.teachers.modalData;

export const selectLoading = (state: RootState) => state.teachers.isLoading;
export const selectLoadPage = (state: RootState) => state.teachers.loadpage;








