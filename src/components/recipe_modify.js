import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { modifyRecipe } from '../actions/index';
import { Link } from 'react-router';

class RecipeModify extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		const { initializeForm } = this.props;
		const id = parseInt(this.props.params.id);
		const list = this.props.list;
		const mod_list = list.filter((item) => {
				if (item.id === id) {
					return true;
				}
				return false;
			})[0];

		initializeForm({name: mod_list.name, ingredients: mod_list.ingredients.join(', ') });
	}

	onSubmit(props) {
		const id = parseInt(this.props.params.id);
		this.props.modifyRecipe({ ...props, id: id });
		this.context.router.push('/');
	}

	render() {
		const { fields: { name, ingredients }, handleSubmit } = this.props;

		return (
			<form className="recipe-new" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Modify Recipe</h3>

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

				<button type="submit" className="btn btn-primary">Modify</button>

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

function mapStateToProps(state) {
	return {
		list: state.list.all
	};
}

export default reduxForm({
	form: 'RecipeModifyForm',
	fields: ['name', 'ingredients'],
	validate
}, mapStateToProps, { modifyRecipe })(RecipeModify);