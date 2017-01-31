import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/about.css';

const About = () => (
  <MuiThemeProvider>
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
  </MuiThemeProvider>
);

export default About;
