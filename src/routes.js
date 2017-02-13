import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RecipeIndex from './components/recipe_index';
import RecipeNew from './components/recipe_new';
import RecipeModify from './components/recipe_modify';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={RecipeIndex} />
		<Route path="new" component={RecipeNew} />
		<Route path="modify/:id" component={RecipeModify} />
	</Route>
);