import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { OnChangeValue } from 'react-select';
import { selectFilter, setSortCart } from '../../../redux/slices/filterSlice';
import classes from '../filter.module.scss';

type SortOptionsType = {
  value: string;
  label: string;
};

const sortOptions: SortOptionsType[] = [
  { value: 'name', label: 'По названию' },
  { value: 'price', label: 'По цене' },
];

const FilterSelect: React.FC = () => {
  const { sortCart } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getValueSelect = () => {
    return sortOptions.find((item) => sortCart === item.value);
  };

  return (
    <div>
      <Select
        placeholder={'Сортировка'}
        className={classes.filter__select}
        onChange={(event: OnChangeValue<SortOptionsType, boolean>) => {
          const newValue = event as SortOptionsType;
          dispatch(setSortCart(newValue.value));
        }}
        options={sortOptions}
        isSearchable={false}
        value={getValueSelect()}
      />
    </div>
  );
};

export default FilterSelect;
