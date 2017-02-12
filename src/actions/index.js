export const RECIPE_SELECTED = 'RECIPE_SELECTED';
export const ADD_RECIPE = "ADD_RECIPE";

export function selectRecipe(recipe) {
	return {
		type: RECIPE_SELECTED,
		payload: recipe
	}
}

export function addRecipe(recipe) {
	return {
		type: ADD_RECIPE,
		payload: recipe
	}
}