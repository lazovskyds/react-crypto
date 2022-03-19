import React from 'react';
import { render, screen } from '@testing-library/react';
import { runComponent } from './runComponent';
import '@testing-library/jest-dom';

const Component = () => <div>test passed</div>;

test('Renders learn react link', () => {
   render(runComponent(Component));
   const text = screen.getByText('test passed');
   expect(text).toBeInTheDocument();
});
