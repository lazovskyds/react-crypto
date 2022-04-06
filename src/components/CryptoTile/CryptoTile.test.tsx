import React from 'react';
import { render, screen } from '@testing-library/react';
import CryptoTile from './CryptoTile.component';
import { mock } from './CryptoTile.mock';

describe('crypto tile', () => {
   test('should render correctly', () => {
      render(<CryptoTile {...mock} />);
      const title = screen.getByText(mock.title);
      const label = screen.getByText(mock.label);
      const svg = screen.getByTestId('crypto-tile-svg');
      expect(title).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(svg).toBeInTheDocument();
   });
});
