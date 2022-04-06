import React from 'react';
import { render, screen } from '@testing-library/react';
import ImportantListComponent from './ImportantList.component';
import { mock } from './ImportantList.mock';

describe('important list', () => {
   test('should render correctly', () => {
      render(<ImportantListComponent title="Important list" items={mock} />);

      const title = screen.getByText('Important list');

      const items = mock.map((item) => screen.getByText(item.title));

      items.forEach((item) => expect(item).toBeInTheDocument());

      expect(title).toBeInTheDocument();
   });
});
