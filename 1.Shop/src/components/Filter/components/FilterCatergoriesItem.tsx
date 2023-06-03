import React from 'react';
import classes from '../filter.module.scss';
import clsx from 'clsx';
import { CategoriesType } from './FilterCategories';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setCategoryName } from '../../../redux/slices/filterSlice';

type CategoryProps = {
  category: CategoriesType;
  id: number;
};

const FilterCatergoriesItem: React.FC<CategoryProps> = ({ category, id }) => {
  const dispatch = useDispatch();
  const { categoryName } = useSelector(selectFilter);
  return (
    <li
      className={clsx(
        classes.filter__item,
        categoryName === category.value ? classes.filter__item_active : '',
      )}
      onClick={() => {
        dispatch(setCategoryName(category.value));
      }}>
      {id + 1}. {category.name}
    </li>
  );
};

export default FilterCatergoriesItem;
