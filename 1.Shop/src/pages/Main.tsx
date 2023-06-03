import React, { useEffect, useRef } from 'react';
import qs from 'qs';
import Filter from '../components/Filter/Filter';
import CardList from '../components/CartList/CardList';

import { fetchData, selectFetchCart } from '../redux/slices/fetchCartSlice';
import { FilterSliceState, selectFilter, setFilters } from '../redux/slices/filterSlice';
import { UseSort } from '../hooks/useSort';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryName, sortCart, queryCart } = useSelector(selectFilter);
  const { data, status } = useSelector(selectFetchCart);
  const sortedData = UseSort(data, sortCart, queryCart);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as FilterSliceState;

      dispatch(
        setFilters({
          categoryName: params.categoryName,
          sortCart: params.sortCart,
          queryCart: params.queryCart,
        }),
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scroll(0, 0);

    if (!isSearch.current) {
      let category: string;

      category = categoryName ? `category/${categoryName}` : '';
      if (categoryName === 'all') category = '';
      dispatch(fetchData(category));
    }

    isSearch.current = false;
  }, [categoryName, sortCart, queryCart, dispatch]);

  useEffect(() => {
    if (isMounted.current) {
      if (!queryCart) {
        const queryString = qs.stringify({
          categoryName,
          sortCart,
        });
        navigate(`?${queryString}`);
      } else {
        const queryString = qs.stringify({
          categoryName,
          sortCart,
          queryCart,
        });
        navigate(`?${queryString}`);
      }
    }
    isMounted.current = true;
  }, [categoryName, sortCart, queryCart, navigate]);

  return (
    <div className="content">
      <Filter />
      <CardList data={sortedData} loading={status} />
    </div>
  );
};

export default Main;
