import reducer, { initialState } from './reducer';

import { getRegions, setCategory, setRegion } from './actions';

describe('reducer', () => {
  describe('getRegions', () => {
    it('regions의 리스트를 반환한다.', () => {
      const prevState = { ...initialState };

      const state = reducer(prevState, getRegions());

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setRegion', () => {
    it('region을 set 한다.', () => {
      const prevState = { ...initialState };
      const region = { id: 1, name: '서울' };

      const state = reducer(prevState, setRegion(region));

      expect(state.region).not.toBeNull();
      expect(state.region).toBe(region);
    });
  });

  describe('getCategories', () => {
    it('categories의 리스트를 반환한다.', () => {
      const prevState = { ...initialState };

      const state = reducer(prevState, getRegions());

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setCategory', () => {
    it('category을 set 한다.', () => {
      const prevState = { ...initialState };
      const category = { id: 1, name: '한식' };

      const state = reducer(prevState, setCategory(category));

      expect(state.category).not.toBeNull();
      expect(state.category).toBe(category);
    });
  });
});
