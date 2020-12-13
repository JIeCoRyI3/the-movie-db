import { ActionType } from '../actions/actionType';


const initialState = {
	currMovie: null,
	moviesList: null,

};

export const appReducer = (state = initialState, action) => {
	switch (action.type){
		case ActionType.RESET:
			return {
				initialState,
			};


		default: {
			return state;
		}
	}
};
