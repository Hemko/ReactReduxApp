import React from 'react';
import '../styles/about.css';

const About = () => (
  <div className="row">
    <div className="small-12 columns">
      <h1>This is about page!</h1>
      <ul className="technology-list">
        <li className="technology-list__item">React</li>
        <li className="technology-list__item">Redux</li>
        <li className="technology-list__item">React Router</li>
        <li className="technology-list__item">Redux Form</li>
        <li className="technology-list__item">Redux Saga</li>
        <li className="technology-list__item">Material UI</li>
      </ul>
    </div>
  </div>
);

export default About;
