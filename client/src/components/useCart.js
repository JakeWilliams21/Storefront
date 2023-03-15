import { useState, useEffect } from 'react';
import { parse, serialize } from 'cookie';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cookieCart = parse(document.cookie).cart;
    if (cookieCart) {
      setCart(JSON.parse(cookieCart));
    }
  }, []);

  useEffect(() => {
    document.cookie = serialize('cart', JSON.stringify(cart), { path: '/' });
    console.log(cart);
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return { cart, addToCart, removeFromCart, total };
};

export default useCart;
