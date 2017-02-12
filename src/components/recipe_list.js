import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../actions/index';

class RecipeList extends Component {
	
	renderList() {
		return this.props.list.map((recipe) => {
			return (
				<li
					key={recipe.id}
					className="list-group-item"
					onClick={() => this.props.selectRecipe(recipe)}
				>
					{recipe.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-3 recipe-list">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		list: state.list.all
	};
}

export default connect(mapStateToProps, { selectRecipe })(RecipeList);