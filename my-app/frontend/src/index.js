import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
  <Game 
  player={0}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
