import { ADD_RECIPE, DELETE_RECIPE } from '../actions/index';

const INITIAL_STATE = { all: [
		{id: 1, name: "Spaghetti", ingredients: ["Noodles", "Tomato", "Meatballs"]}, 
    {id: 2, name: "Onion Pie", ingredients: ["Onion", "Pie Crust"]}, 
    {id: 3, name: "Chicken Noodle Soup", ingredients: ["Soup", "Chicken", "Noodle"]}
  ], nextid: 4};



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
			return { all: previous_all, nextid: state.nextid }

		default:
			return state;
	}
}