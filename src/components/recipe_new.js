import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { addRecipe } from '../actions/index';
import { Link } from 'react-router';

class RecipeNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.addRecipe(props);
		this.context.router.push('/');
	}

	render() {
		const { fields: { name, ingredients }, handleSubmit } = this.props;

		return (
			<form className="recipe-new" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Recipe</h3>

				<div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
					<label>Name</label>
					<input type="text" className="form-control" {...name} />
					<div className="text-danger">
						{name.touched ? name.error : ''}
					</div>
				</div>

				<div className={`form-group ${ingredients.touched && ingredients.invalid ? 'has-danger' : ''}`}>
					<label>Ingredients (separate each by comma)</label>
					<textarea type="text" className="form-control" {...ingredients} />
					<div className="text-danger">
						{ingredients.touched ? ingredients.error : ''}
					</div>
				</div>

				<button type="Submit" className="btn btn-primary">Submit</button>

				<Link to="/" className="btn btn-danger">Cancel</Link>

			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.name) {
		errors.name = 'Enter a name';
	}

	if (!values.ingredients) {
		errors.ingredients = 'Enter ingredients';
	}

	return errors;
}

export default reduxForm({
	form: 'RecipeNewForm',
	fields: ['name', 'ingredients'],
	validate
}, null, { addRecipe })(RecipeNew);