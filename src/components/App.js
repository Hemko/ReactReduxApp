import React, { PropTypes }  from 'react';
import { Link } from 'react-router';
import '../styles/menu.css';

const App = (props) => (
  <div className='container'>
    <h1>App</h1>
    <ul className="menu">
      <li className="menu__item">
        <Link to='/' className="menu__link" activeClassName='menu__link_active' onlyActiveOnIndex>Home</Link>
      </li>
      <li className="menu__item">
        <Link to='/statistic' className="menu__link" activeClassName='menu__link_active'>Statistic</Link>
      </li>
      <li className="menu__item">
        <Link to='/about' className="menu__link" activeClassName='menu__link_active'>About</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
