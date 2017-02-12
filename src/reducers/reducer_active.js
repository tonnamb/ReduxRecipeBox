import { RECIPE_SELECTED, DELETE_RECIPE } from '../actions/index';

export default function(state = null, action) {
	switch(action.type) {
		case RECIPE_SELECTED:
			return action.payload;
		case DELETE_RECIPE:
			return null;
		default:
			return state;
	}
}