import React from 'react';

const Filter = ({value, id}) => {
  return (
    <li>
      <input type="radio" name="category" value={value} id={id} defaultChecked /><label htmlFor={id}>{value}</label>
    </li>
  );
};

export default Filter;