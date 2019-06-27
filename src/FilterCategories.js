import React from 'react';
import Filters from './Filters';

const FilterCategories = () => {
  return (
    <section id="filterCategories">
      <Filters />
      <form id="newCat" className="cat-new">
        <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Filters" />
      </form>
    </section>
  );
};

export default FilterCategories;