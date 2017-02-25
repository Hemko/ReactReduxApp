import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import currencySaga from '../sagas/Currency';
import initialState from './initialState';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reducer = compose(
    mergePersistedState()
  )(rootReducer);
  const storage = compose(
    filter('transactions')
  )(adapter(window.localStorage));
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    persistState(storage, 'redux-localstorage'),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return {
    ...createStore(
      reducer,
      initialState,
      enhancer
    ),
    runSaga: sagaMiddleware.run(currencySaga)
  };
};

export default configureStore;
