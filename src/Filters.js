import React from 'react';
import Filter from './Filter'

const Filters = () => {
  return (
    <ul className="filters">
      <Filter value="all" id='filter0'/>
      <Filter value="meat" id='filter1'/>
      <Filter value="prod" id='filter2'/>
      <Filter value="dairy" id='filter3'/>
      <Filter value="bakery" id='filter4'/>
    </ul>
  );
};

export default Filters;