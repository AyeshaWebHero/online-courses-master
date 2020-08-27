import React from 'react';
import Course from './Components/Course/Course';
import './App.css';

function App() {
  return (
    <div className="all-content">
      <div className="header text-center text-white bg-info d-flex flex-column justify-content-center align-items-center">
        <h3><span className="design text-warning">Udemy</span> Classes</h3>
        <p className="lead pb-2">Think, LEARN and Grow! </p>
      </div>
      <Course></Course>
    </div>
  );
}

export default App;
