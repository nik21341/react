import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/slices/cartSlice';
import { Cart } from '../../redux/slices/fetchCartSlice';
import classes from './cartItem.module.scss';
import clsx from 'clsx';

type CardItemProps = {
  cart: Cart;
  className: string;
};

const CardItem: React.FC<CardItemProps> = ({ className, cart }) => {
  const dispatch = useDispatch();

  return (
    <div className={clsx(classes.cart, className)}>
      <img className={classes.cart__img} src={cart.thumbnail} alt={cart.title} />
      <Link to={`/cart/${cart.id}`} className={classes.cart__title}>
        <h2>{cart.title}</h2>
      </Link>
      <p className={classes.cart__price}>price: {cart.price}$</p>

      <button onClick={() => dispatch(addProduct(cart))}>Добавить в корзину</button>
    </div>
  );
};

export default CardItem;
