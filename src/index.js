import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Card from './components/Card';
import "./stylesheets/main.scss"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);