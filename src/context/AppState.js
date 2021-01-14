import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './appReducer';
import { SET_PAGE } from './types';

export const AppState = (props) => {
	const initialState = {
		page: 'home',
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	const setPage = (page) => dispatch({ type: SET_PAGE, payload: page });

	return (
		<AppContext.Provider value={{ page: state.page, setPage }}>
			{props.children}
		</AppContext.Provider>
	);
};
