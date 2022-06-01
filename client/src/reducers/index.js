import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { authReducer } from './authReducer';

export const reducers = combineReducers({
  auth: authReducer,
  form: reduxForm
});