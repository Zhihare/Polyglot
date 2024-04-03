import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user
export const selectFavorites = (state: RootState) => state.teachers.favorites;