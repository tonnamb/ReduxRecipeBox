import { ADD_RECIPE, DELETE_RECIPE, MODIFY_RECIPE } from '../actions/index';

const INITIAL_STATE = { all: [], nextid: 1};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case ADD_RECIPE:
			const all = state.all;
			const ingredients = action.payload.ingredients.split(',').map((element) => element.trim());
			const name = action.payload.name;

			all.push({ id: state.nextid, name: name, ingredients: ingredients });
			const newid = state.nextid + 1;
			
			return { all: all, nextid: newid };

		case DELETE_RECIPE:
			const delete_id = action.payload.id;
			var previous_all = state.all;
			previous_all = previous_all.filter((item) => {
				if (item.id !== delete_id) {
					return true;
				}
				return false;
			});
			return { all: previous_all, nextid: state.nextid };

		case MODIFY_RECIPE:
			const modify_id = action.payload.id;
			const mod_ingredients = action.payload.ingredients.split(',').map((element) => element.trim());
			const mod_name = action.payload.name;
			var mod_all = state.all;
			mod_all = mod_all.map((item) => {
				if (item.id !== modify_id) {
					return item;
				}
				return { id: modify_id, name: mod_name, ingredients: mod_ingredients };
			});
			return { all: mod_all, nextid: state.nextid };

		default:
			return state;
	}
}