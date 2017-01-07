import React, { PropTypes }  from 'react';
import { Link } from 'react-router';
import '../styles/menu.css';

const App = (props) => (
  <div className='container'>
    <h1>App</h1>
    <ul className="menu">
      <li className="menu__item">
        <Link to='/' activeClassName='menu__item_active' onlyActiveOnIndex>Home</Link>
      </li>
      <li className="menu__item">
        <Link to='/statistic' activeClassName='menu__item_active'>Statistic</Link>
      </li>
      <li className="menu__item">
        <Link to='/about' activeClassName='menu__item_active'>About</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
