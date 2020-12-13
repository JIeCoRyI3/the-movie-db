import { ActionType } from './actionType';

export const ActionCreator = {
	reset: (dispatch) => dispatch({
		type: ActionType.RESET
	}),

};
