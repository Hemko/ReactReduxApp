import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import configureStore from './store/configureStore';
import { currencyFetchRequested } from './actions/Currency';

const store = configureStore();

// TODO: remove dispatch
store.dispatch(currencyFetchRequested());

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
