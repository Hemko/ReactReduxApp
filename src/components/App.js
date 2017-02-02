import React, { PropTypes }  from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/app.css';
import '../styles/header.css';

const App = (props) => (
  <div>
    <header className='header'>
      <div className="row align-justify align-middle">
        <div className="columns">
          <Link to='/' className="header__logo"><h1>App</h1></Link>
        </div>
        <div className="columns">
          <ul className="menu">
            <li className="menu__item">
              <Link to='/categories' className="menu__link" activeClassName='menu__link_active'>Categories</Link>
            </li>
            <li className="menu__item">
              <Link to='/statistic' className="menu__link" activeClassName='menu__link_active'>Statistic</Link>
            </li>
            <li className="menu__item">
              <Link to='/about' className="menu__link" activeClassName='menu__link_active'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div className='container'>
      <MuiThemeProvider>
        {props.children}
      </MuiThemeProvider>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
