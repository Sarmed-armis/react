import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import News from './News';



ReactDOM.render(
  <App />,

  document.getElementById('master')

);

ReactDOM.render(
  <News/>,

  document.getElementById('root')

);
