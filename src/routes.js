import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RecipeIndex from './components/recipe_index';
import RecipeNew from './components/recipe_new';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={RecipeIndex} />
		<Route path="new" component={RecipeNew} />
	</Route>
)