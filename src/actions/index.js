export const RECIPE_SELECTED = 'RECIPE_SELECTED';
export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const MODIFY_RECIPE = "MODIFY_RECIPE";

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

export function deleteRecipe(recipe) {
	return {
		type: DELETE_RECIPE,
		payload: recipe
	}
}

export function modifyRecipe(recipe) {
	return {
		type: MODIFY_RECIPE,
		payload: recipe
	}
}