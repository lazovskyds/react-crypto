import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.component';

describe('header', () => {
   test('should render correctly', () => {
      render(
         <BrowserRouter>
            <Header />
         </BrowserRouter>
      );

      const title = screen.getByText('Tracker');

      expect(title).toBeInTheDocument();
   });
});
