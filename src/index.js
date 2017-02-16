import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import Categories from './components/Categories';
import Statistic from './components/Statistic';
import NotFound from './components/NotFound';
import SingleTransaction from './components/SingleTransaction';
import configureStore from './store/configureStore';
import { currencyFetchRequested } from './actions/Currency';
import './styles/normalize.css';
import './styles/foundation.min.css';

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
        <Route path='categories' component={Categories} />
        <Route path='statistic' component={Statistic} />
        <Route path='about' component={About} />
        <Route path='transaction/:id' component={SingleTransaction} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
