import React from 'react'

const Item = ({className, item, quantity, handleQuantityChange}) => {

  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 0) {
      handleQuantityChange(newQuantity);
    };
  };

  return (
    <li className={className}>
      <button onClick={ () => updateQuantity(quantity - 1) }>-</button>
      <span>{quantity} {item}</span>
      <button onClick={ () => updateQuantity(quantity + 1) }>+</button>
    </li>
  );
};

export default Item;