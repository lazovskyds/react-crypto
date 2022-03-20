import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from '@styles/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '@components/index';

ReactDOM.render(
   <>
      <GlobalStyles />
      <Router>
         <App />
      </Router>
   </>,
   document.getElementById('root')
);
