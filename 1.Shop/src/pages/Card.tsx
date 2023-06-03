import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Cart } from '../redux/slices/fetchCartSlice';

const Card: React.FC = () => {
  const params = useParams();
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Cart>(`https://dummyjson.com/products/${params.id}`);
      setCart(data);
    })();
  }, [params]);

  if (!cart) {
    return <div>загрузка</div>;
  }

  return (
    <div className="card">
      <h1>CARD {cart.title}</h1>
      <p>{cart.brand}</p>
      <p>{cart.description}</p>
      <p>{cart.price} $</p>
      <img src={cart.images[0]} alt={cart.title} />
    </div>
  );
};

export default Card;
