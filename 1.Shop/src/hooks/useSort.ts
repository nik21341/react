import { useMemo } from 'react';
import { Cart } from '../redux/slices/fetchCartSlice';

export const GetSortedData = (data: Cart[], filterSelect?: string) => {
  const sortedData = useMemo(() => {
    if (!filterSelect) return data;
    switch (filterSelect) {
      case 'price':
        return [...data].sort((a, b) => a.price - b.price);
      case 'name':
        return [...data].sort((a, b) => a.title.localeCompare(b.title));
      case undefined:
        return data;
      default:
        return data;
    }
  }, [filterSelect, data]);

  return sortedData;
};

export const UseSort = (data: Cart[], filterSelect?: string, filterQuery?: string) => {
  const sortedPost = GetSortedData(data, filterSelect);

  const sortedAndSearchedPosts = useMemo(() => {
    if (!filterQuery) return sortedPost;
    return sortedPost.filter((card) =>
      card.title.toLowerCase().includes(filterQuery.toLowerCase()),
    );
  }, [filterQuery, sortedPost]);

  return sortedAndSearchedPosts;
};
