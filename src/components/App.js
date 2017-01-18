import React, { PropTypes }  from 'react';
import { Link } from 'react-router';
import '../styles/app.css';
import '../styles/header.css';

const App = (props) => (
  <div>
    <header className='header'>
      <Link to='/' className="header__logo"><h1>App</h1></Link>
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
    </header>
    <div className='container'>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
