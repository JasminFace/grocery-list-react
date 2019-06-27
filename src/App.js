import React from 'react';
import './App.css';
import NewItem from './NewItem';
import FilterCategories from './FilterCategories';
import ShoppingList from './ShoppingList'
const App = () => {

  const Header = () => {
    return (<header className="header"><h1>Grocery List</h1></header>)
  };

  return (
    <div>
      <Header />
      <NewItem />
      <FilterCategories />
      <ShoppingList />
    </div>
  );
}

export default App;
