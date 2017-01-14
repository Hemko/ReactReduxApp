import React, { PropTypes }  from 'react';
import { Link } from 'react-router';
import '../styles/app.css';
import '../styles/header.css';

const App = (props) => (
  <div className='container'>
    <header className='header'>
      <h1>App</h1>
      <ul className="menu">
        <li className="menu__item">
          <Link to='/' className="menu__link" activeClassName='menu__link_active' onlyActiveOnIndex>Home</Link>
        </li>
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
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
