import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

import { regions } from './fixture/initialState';

describe('RestaurantRegions', () => {
  context('with fetch data', () => {
    it('renders regions', () => {
      const handleClick = jest.fn();

      const { getByText } = render(
        <RestaurantRegions
          regions={regions}
          onClick={handleClick}
          selected="서울"
        />,
      );

      fireEvent.click(getByText(/서울/));

      expect(handleClick).toBeCalled();

      expect(getByText(/서울/)).not.toBeNull();
      expect(getByText(/대전/)).not.toBeNull();
    });
  });
});