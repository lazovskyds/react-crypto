import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar.component';
import { mock } from './NavBar.mock';
import { BrowserRouter } from 'react-router-dom';

const titles = mock.map((item) => item.title);

describe('navbar', () => {
   test('should render correctly', () => {
      render(
         <BrowserRouter>
            <NavBar navItems={mock} />
         </BrowserRouter>
      );

      const screenTitles = titles.map((item) => screen.getByText(item));

      screenTitles.forEach((item) => expect(item).toBeInTheDocument());
   });
});
