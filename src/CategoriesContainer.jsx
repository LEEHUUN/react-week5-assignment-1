import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((selector) => ({
    categories: selector.categories,
  }));

  function onSelect(id) {
    dispatch(selectCategory(id));
  }

  return (
    <Categories
      categories={categories}
      onSelect={onSelect}
    />
  );
}
