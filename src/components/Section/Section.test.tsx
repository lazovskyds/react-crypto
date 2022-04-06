import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section.component';
import { mock, MockComponent } from './Section.mock';

describe('section', () => {
   test('should render correctly', () => {
      render(
         <Section title={mock.title}>
            <MockComponent />
         </Section>
      );

      const title = screen.getByText(mock.title);
      const children = screen.getByText('This is children');

      expect(title).toBeInTheDocument();
      expect(children).toBeInTheDocument();
   });
});
