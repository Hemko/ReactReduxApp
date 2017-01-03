import React, { PropTypes }  from 'react';
import { Link } from 'react-router';

const App = (props) => (
  <div className='container'>
    <h1>App</h1>
    <ul>
      <li><Link to='/' activeClassName='active'>Home</Link></li>
      <li><Link to='/statistic' activeClassName='active'>Statistic</Link></li>
      <li><Link to='/about' activeClassName='active'>About</Link></li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
