import { useState } from 'react';
import products from './fake-data/all-products';
import categories from './fake-data/all-categories';
import { AllCategories } from './components/Categories';
import { AllProducts } from './components/Products';
import './App.css';

function App() {
  const [categoryState, setCategoryState] = useState();
  const categoryProducts = categoryState ? products.filter(product => product.category.includes(categoryState.split(':')[1].trim())) : products;
  
  const handleCategoryClick = (category) => {

    if (categoryState === category) {
      setCategoryState(undefined); 
    } else {
      setCategoryState(category);
    }
  };

  return (
    <div className="ecommerce-aplication">
      <h1>Products</h1>
      <AllCategories categories={categories} setCategoryState={handleCategoryClick} categoryState={categoryState} />
      <AllProducts products={categoryProducts} />
    </div>
  );
}

export default App;

//https://main--ecommercehyf.netlify.app/