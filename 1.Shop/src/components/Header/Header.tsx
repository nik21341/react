import React, { useEffect } from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCarts } from '../../redux/slices/cartSlice';
import { Cart } from '../../redux/slices/fetchCartSlice';

const Header: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCarts);
  const totalItem = items.reduce((sum: number, items: Cart) => sum + items.count, 0);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('cart', json);
  }, [items]);

  return (
    <div className="header">
      <div className={classes.Header__inner + ' container'}>
        <Link to={'/'} className={classes.Header__logo}>
          logo
        </Link>
        <Link to={'/basket'} className={classes.Header__basket}>
          {totalPrice} корзина {totalItem}
        </Link>
      </div>
    </div>
  );
};

export default Header;
