import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, minusCountCart, removeItem, selectCarts } from '../redux/slices/cartSlice';
import { Cart } from '../redux/slices/fetchCartSlice';
import { Link } from 'react-router-dom';

const Basket: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCarts);
  const dispatch = useDispatch();

  const plusItem = (item: Cart) => {
    dispatch(addProduct(item));
  };

  const minusItem = (item: Cart) => {
    dispatch(minusCountCart(item));
  };

  const deletItem = (item: Cart) => {
    dispatch(removeItem(item));
  };

  console.log(items);

  return (
    <div>
      {items.length ? (
        <div>
          <ul>
            {items.map((item: Cart, index: number) => (
              <li key={index}>
                {item.title} {item.price * item.count}$
                <div>
                  <button onClick={() => plusItem(item)}>+</button>
                  <span>{item.count}</span>
                  <button disabled={item.count === 1} onClick={() => minusItem(item)}>
                    -
                  </button>
                </div>
                <button onClick={() => deletItem(item)}>delete</button>
              </li>
            ))}
          </ul>
          <span>{totalPrice}$</span>
        </div>
      ) : (
        <div>
          корзина пуста обратно на страницу
          <p>
            <Link to={'/'}>НА главную</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Basket;
