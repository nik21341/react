import classes from './filter.module.scss';
import React from 'react';
import FilterSelect from './components/FilterSelect';
import FilterSearch from './components/FilterSearch';
import FilterCategories from './components/FilterCategories';

const Filter: React.FC = () => {
  return (
    <div className={classes.filter}>
      <div className="container">
        <FilterSearch />
        <FilterSelect />
        <FilterCategories />
      </div>
    </div>
  );
};

export default Filter;
