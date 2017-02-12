import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteRecipe } from '../actions/index';

class RecipeActive extends Component {

	renderList() {
		return this.props.active.ingredients.map((food) => {
			return (
				<li key={food} >
					{food}
				</li>
			);
		});
	}

	render() {
		const active = this.props.active

		if (!active) {
			return <div className="col-sm-9 recipe-active">Select a recipe to get started.</div>
		}

		return (
			<div className="col-sm-6 recipe-active">
				<h3>{active.name}</h3>
				<h5>Ingredients:</h5>
				<ul>
					{this.renderList()}
				</ul>
				<div className="btn-group" role="group" aria-label="recipe-action">
					<Link className="btn btn-default">Modify</Link>
					<button 
						type="button" 
						className="btn btn-default"
						onClick={() => this.props.deleteRecipe(active)}
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		active: state.active
	};
}

export default connect(mapStateToProps, { deleteRecipe })(RecipeActive);