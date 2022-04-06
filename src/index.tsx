import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from '@styles/index';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@components/index';

ReactDOM.render(
   <>
      <GlobalStyles />
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </>,
   document.getElementById('root')
);
