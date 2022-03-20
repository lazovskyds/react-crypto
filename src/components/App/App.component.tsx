import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
   Home,
   Portfolio,
   Coin,
   All,
   Error,
} from '@pages/index';
import { routes } from '@constants/index';
import { Header } from '@layout/index';
import { GlobalWrapper, PageWrapper } from './App.styles';

const App = () => {
   return (
      <GlobalWrapper>
         <Header />
         <PageWrapper>
            <Routes>
               <Route
                  path={routes.home}
                  element={<Home />}
               />
               <Route
                  path={routes.portfolio}
                  element={<Portfolio />}
               />
               <Route
                  path={routes.coin}
                  element={<Coin />}
               />
               <Route path={routes.all} element={<All />} />
               <Route
                  path={routes.error}
                  element={<Error />}
               />
            </Routes>
         </PageWrapper>
      </GlobalWrapper>
   );
};

export default App;
