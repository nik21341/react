import React from 'react';
import classes from '../filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setQueryCart } from '../../../redux/slices/filterSlice';

const FilterSearch: React.FC = () => {
  const { queryCart } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const clearInput = () => {
    dispatch(setQueryCart(''));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQueryCart(e.target.value));
  };

  return (
    <div>
      <div className={classes.filter__inner_input}>
        <input
          className={classes.filter__input}
          value={queryCart || ''}
          onChange={handleInput}
          type="text"
          placeholder="поиск"
        />
        {queryCart && (
          <div onClick={clearInput} className={classes.filter__input_close}>
            X
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSearch;
