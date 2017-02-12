import { combineReducers } from 'redux';
import ListReducer from './reducer_list';
import ActiveReducer from './reducer_active';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  list: ListReducer,
  active: ActiveReducer,
  form: formReducer
});

export default rootReducer;
