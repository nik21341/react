import React from 'react';
import classes from '../filter.module.scss';
import FilterCatergoriesItem from './FilterCatergoriesItem';

export type CategoriesType = {
  name: string;
  value: string;
};

const categories: CategoriesType[] = [
  { name: 'all', value: 'all' },
  { name: 'smartphones', value: 'smartphones' },
  { name: 'laptops', value: 'laptops' },
  { name: 'fragrances', value: 'fragrances' },
  { name: 'groceries', value: 'groceries' },
  { name: 'home-decoration', value: 'home-decoration' },
  { name: 'furniture', value: 'furniture' },
  { name: 'tops', value: 'tops' },
  { name: 'womens-dresses', value: 'womens-dresses' },
  { name: 'mens-shirts', value: 'mens-shirts' },
  { name: 'mens-shoes', value: 'mens-shoes' },
  { name: 'mens-watches', value: 'mens-watches' },
  { name: 'womens-watches', value: 'womens-watches' },
  { name: 'womens-bags', value: 'womens-bags' },
  { name: 'womens-jewellery', value: 'womens-jewellery' },
  { name: 'sunglasses', value: 'sunglasses' },
  { name: 'automotive', value: 'automotive' },
  { name: 'motorcycle', value: 'motorcycle' },
  { name: 'lighting', value: 'lighting' },
];

const FilterCategories: React.FC = () => {
  return (
    <div>
      <ul className={classes.filter__categories}>
        {categories.map((item, index) => (
          <FilterCatergoriesItem key={index} category={item} id={index} />
        ))}
      </ul>
    </div>
  );
};

export default FilterCategories;
