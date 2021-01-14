import { SET_PAGE } from './types';

const appReducer = (state, action) => {
	switch (action.type) {
		case SET_PAGE:
			return {
				...state,
				page: action.payload,
			};
		default:
			return state;
	}
};
export default appReducer;
