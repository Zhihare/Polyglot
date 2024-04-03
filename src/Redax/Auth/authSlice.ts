import { createSlice, isAnyOf } from '@reduxjs/toolkit';





export interface UserState {
    email: string | null;
    token: string| null;
    id: string | null;
}


const initialState: UserState = {
    email: null,
    token: null,
    id: null
};

const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
		},

        deleteUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }

			},
});

export const userReducer = userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;