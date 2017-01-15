import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import transactions from './Transactions';
import categories from './Categories';
import currency from './Currency';

const rootReducer = combineReducers({
  form: formReducer,
  transactions,
  categories,
  currency
});

export default rootReducer;
