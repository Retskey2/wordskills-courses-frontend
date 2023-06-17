import {configureStore} from '@reduxjs/toolkit'
import { reducers } from './rootReducers';


const store = configureStore({
	reducer: reducers,
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
