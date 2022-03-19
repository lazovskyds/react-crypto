import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import { App } from 'components';

ReactDOM.render(
   <>
      <GlobalStyle />
      <App />
   </>,
   document.getElementById('root')
);
