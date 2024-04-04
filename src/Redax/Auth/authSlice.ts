import { createSlice } from '@reduxjs/toolkit';





export interface UserState {
    name: string | null;
    email: string | null;
    token: string| null;
    id: string | null;
}


const initialState: UserState = {
    email: null,
    token: null,
    id: null,
    name: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
		},

        deleteUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
        },
			},
});

export const userReducer = userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;