import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import searchReducer from './reducers/searchSlice';

const rootReducer = combineReducers({
	search: searchReducer
});

const store = configureStore({
	reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
