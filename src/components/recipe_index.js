import React from 'react';
import RecipeList from './recipe_list';
import RecipeActive from './recipe_active';
import { Link } from 'react-router';

export default () => {
	return (
		<div>
			<ul className="nav nav-pills">
				<li role="presentation" className="active">
					<Link to="/new">
						Add a Recipe
					</Link>
				</li>
			</ul>
			<RecipeList />
			<RecipeActive />
		</div>
	);
}