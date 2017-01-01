import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import transactions from './Transactions';
import currency from './Currency';

const rootReducer = combineReducers({
  form: formReducer,
  transactions,
  currency
});

export default rootReducer;
