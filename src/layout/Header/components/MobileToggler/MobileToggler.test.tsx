import React from 'react';
import { render, screen } from '@testing-library/react';
import MobileToggler from './MobileToggler.component';

describe('toggler button', () => {
   test('should render correctly', () => {
      render(
         <MobileToggler isOpen={false} toggleOpen={() => console.log('open')} />
      );

      const togglerIcon = screen.getByTestId('toggler-icon');

      expect(togglerIcon).toBeInTheDocument();
   });
});
