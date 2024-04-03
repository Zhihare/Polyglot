import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { teachersReducer } from './teacherSlice';
import { userReducer } from './Auth/authSlice';


const teachersConfig = {
	key: 'teachers',
	storage,
	whitelist: ['teachers', 'favorites'],
};


const rootReducer = combineReducers({
	teachers: persistReducer(teachersConfig, teachersReducer),
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,


	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);