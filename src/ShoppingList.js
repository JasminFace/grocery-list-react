import React, { useState } from 'react';
import Item from './Item'

const ShoppingList = () => {

  let meat = 0;
  let prod = 0;
  let dairy = 0;
  let bakery = 0;

  let [m, setM] = useState(meat);
  let [p, setP] = useState(prod);
  let [d, setD] = useState(dairy);
  let [b, setB] = useState(bakery);


  return (
    <ul id="shoppingList" className="shoppinglist">
      <Item className="meat" quantity={m} handleQuantityChange={setM} item="Steaks" />
      <Item className="prod" quantity={p} handleQuantityChange={setP} item="Apples" />
      <Item className="dairy" quantity={d} handleQuantityChange={setD} item="Milk (1L, 2%)" />
      <Item className="bakery" quantity={b} handleQuantityChange={setB}item="Baguettes" />
  </ul>
  );
};

export default ShoppingList