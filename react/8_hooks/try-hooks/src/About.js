import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useTitle from './useTitle.js';

function About() {
  useTitle('关于');
  return (
    <div className="about">
    About
    </div>
  );
}

export default About;
