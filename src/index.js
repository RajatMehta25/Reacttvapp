import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'
import {HashRouter} from 'react-router-dom';
import LoginCard from './LoginCard';



ReactDOM.render(
  <>
  <HashRouter>
  <Main />
  </HashRouter>

  </>,
  document.getElementById('root')
);


