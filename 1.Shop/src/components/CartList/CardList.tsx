import React from 'react';
import CardItem from '../CartItem/CardItem';
import { Cart, Status } from '../../redux/slices/fetchCartSlice';
import classes from './cartList.module.scss';
import clsx from 'clsx';

type CardListProps = {
  data: Cart[];
  loading: string;
};

const CardList: React.FC<CardListProps> = ({ data, loading }) => {
  if (Status.LOADING === loading) {
    return (
      <div className={classes.catalog}>
        <div className="container" style={{ textAlign: 'center' }}>
          loading...
        </div>
        ;
      </div>
    );
  }

  if (Status.SUCCESS) {
    return (
      <div className={classes.catalog}>
        <div className="container">
          <ul className={clsx(classes.catalog__list, 'list-reset')}>
            {data.map((cart, id) => (
              <CardItem className={classes.catalog__item} key={id} cart={cart} />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.catalog}>
      <div className="container">посты не найдены</div>
    </div>
  );
};

export default CardList;
